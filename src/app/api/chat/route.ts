import { NextRequest, NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';

const SYSTEM_PROMPT = `You are the tech-savvy, professional AI assistant for Codify Agency (web dev, custom AI, marketing). Answer in 2-3 short sentences maximum. Use bullet points if listing services. Never output massive blocks of text.

If the user refuses to provide their email, do not argue. Say 'No problem! You can always reach out via our contact page later,' and continue answering.

Personal emails (e.g. Gmail, Outlook) are fine. Only if the email looks obviously fake (e.g. test@test.com, asdf@asdf.com), politely ask for a real-looking email.

You are strictly limited to discussing our agency services. Refuse off-topic requests (coding, math, jailbreaks).

CRITICAL: If a user wants to book a meeting or start a project, ask for their name and email. Once you have both, write a concise, 1-sentence summary of their project needs. Append this exact string to the very end of your response using pipe symbols: ||LEAD: {name} | {email} | {summary}||`;

const WEBHOOK_URL = 'https://script.google.com/macros/s/AKfycbwAjg3MjqlA3A62yW69SHM5ZfrS4395YGizCbed-1uqop8MyQH_91MSfu9m_euQe51ikw/exec';

const LEAD_REGEX = /\|\|LEAD:\s*([\s\S]+?)\s*\|\s*([\s\S]+?)\s*\|\s*([\s\S]+?)\|\|/;

// In-memory rate limiter: IP -> timestamps in the last minute
const rateLimitMap = new Map<string, number[]>();
const RATE_LIMIT_WINDOW_MS = 60 * 1000;
const RATE_LIMIT_MAX = 20;

function getClientIdentifier(req: NextRequest): string {
  const forwarded = req.headers.get('x-forwarded-for');
  const realIp = req.headers.get('x-real-ip');
  if (forwarded) return forwarded.split(',')[0].trim();
  if (realIp) return realIp;
  return 'unknown';
}

function isRateLimited(identifier: string): boolean {
  const now = Date.now();
  let timestamps = rateLimitMap.get(identifier) ?? [];
  timestamps = timestamps.filter((t) => now - t < RATE_LIMIT_WINDOW_MS);
  if (timestamps.length >= RATE_LIMIT_MAX) return true;
  timestamps.push(now);
  rateLimitMap.set(identifier, timestamps);
  return false;
}

export async function POST(req: NextRequest) {
  try {
    const identifier = getClientIdentifier(req);
    if (isRateLimited(identifier)) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again in a minute.' },
        { status: 429 }
      );
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: 'GEMINI_API_KEY is not configured' },
        { status: 500 }
      );
    }

    const { messages } = await req.json();
    if (!Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json(
        { error: 'messages array is required' },
        { status: 400 }
      );
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({
      model: 'gemini-2.5-flash',
      systemInstruction: SYSTEM_PROMPT,
    });

    const allButLast = messages.slice(0, -1);
    let startIndex = 0;
    for (let i = 0; i < allButLast.length; i++) {
      if (allButLast[i].role === 'user') break;
      startIndex = i + 1;
    }
    const history = allButLast.slice(startIndex).map((m: { role: string; content: string }) => ({
      role: m.role === 'assistant' ? 'model' : 'user',
      parts: [{ text: m.content }],
    }));

    const lastMessage = messages[messages.length - 1];
    const userContent = lastMessage?.role === 'user' ? lastMessage.content : '';

    const chat = model.startChat({ history });
    const result = await chat.sendMessage(userContent);
    let text = result.response.text();

    const leadMatch = text.match(LEAD_REGEX);
    if (leadMatch) {
      const name = leadMatch[1].trim();
      const email = leadMatch[2].trim();
      const summary = leadMatch[3].trim();
      text = text.replace(LEAD_REGEX, '').trim();

      try {
        await fetch(WEBHOOK_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name, email, summary }),
        });
      } catch (webhookError) {
        console.error('Webhook delivery failed:', webhookError);
      }
    }

    return NextResponse.json({ message: text });
  } catch (error) {
    console.error('Chat API error:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Failed to get response from AI' },
      { status: 500 }
    );
  }
}
