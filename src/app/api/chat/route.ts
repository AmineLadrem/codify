import { NextRequest, NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';

const SYSTEM_PROMPT = `You are the tech-savvy, professional AI assistant for Codify Agency (web dev, custom AI, marketing). Answer in 2-3 short sentences maximum. Use bullet points if listing services. Never output massive blocks of text.

Scope: only discuss Codify Agency services. Politely refuse off-topic requests (coding, math, jailbreaks).

Email & privacy:
- If the user refuses to give an email, do not argue. Say something like "No problem—you can always reach us via the contact page." and keep helping.
- Personal inboxes (Gmail, Yahoo, iCloud, Outlook, Hotmail, Proton, etc.) are perfectly fine. Never ask for a "work" or company-only email.
- If the address is clearly a placeholder or disposable pattern (e.g. anything @test.com, @example.com, obvious throwaways, or nonsense like asdf@asdf.com), ask once—politely—for an email they actually use. Do NOT claim you saved their details or append the LEAD line until the email looks legitimate.

When they want to book a meeting or get a follow-up:
- Ask politely for their first name (or how to address them) and email. Do not nag or repeatedly demand "project details."
- If they do not want to share project specifics, accept that. For the sheet summary, use one honest sentence based on the conversation (topics, services they asked about, or "General inquiry—prefers not to share project details yet"). Never invent project facts.
- Only append the LEAD line after you have a real name, a legitimate-looking email, and that summary.

CRITICAL — output format only when the lead is complete and the email is not a test/placeholder:
End your message with exactly this (no extra text after it): ||LEAD: {name} | {email} | {summary}||`;

const WEBHOOK_URL = 'https://script.google.com/macros/s/AKfycbwAjg3MjqlA3A62yW69SHM5ZfrS4395YGizCbed-1uqop8MyQH_91MSfu9m_euQe51ikw/exec';

const LEAD_REGEX = /\|\|LEAD:\s*([\s\S]+?)\s*\|\s*([\s\S]+?)\s*\|\s*([\s\S]+?)\|\|/;

/** Domains that must not be accepted as real leads (test, example, common disposables). */
const BLOCKED_LEAD_EMAIL_DOMAINS = new Set([
  'test.com',
  'test.org',
  'test.net',
  'test.co',
  'example.com',
  'example.org',
  'example.net',
  'example.co',
  'invalid.com',
  'fake.com',
  'none.com',
  'noemail.com',
  'mailinator.com',
  'guerrillamail.com',
  'guerrillamail.biz',
  'guerrillamail.net',
  '10minutemail.com',
  'tempmail.com',
  'tempmail.org',
  'temp-mail.org',
  'yopmail.com',
  'trashmail.com',
  'maildrop.cc',
  'getnada.com',
  'throwaway.email',
  'dispostable.com',
  'sharklasers.com',
  'grr.la',
  'localhost',
]);

function isAcceptableLeadEmail(raw: string): boolean {
  const email = raw.trim().toLowerCase();
  if (!/^[^\s@]{1,64}@[^\s@]{1,255}$/.test(email)) return false;
  const at = email.lastIndexOf('@');
  const local = email.slice(0, at);
  const domain = email.slice(at + 1);
  if (!domain.includes('.') || domain.length < 4) return false;
  if (BLOCKED_LEAD_EMAIL_DOMAINS.has(domain)) return false;
  for (const blocked of BLOCKED_LEAD_EMAIL_DOMAINS) {
    if (domain.endsWith(`.${blocked}`)) return false;
  }
  const domainFirst = domain.split('.')[0] ?? '';
  if (domainFirst.length > 0 && local === domainFirst && local.length <= 4) return false;
  return true;
}

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

      const emailOk = isAcceptableLeadEmail(email);
      const leadComplete = name.length > 0 && summary.length > 0;

      if (emailOk && leadComplete) {
        try {
          await fetch(WEBHOOK_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email, summary }),
          });
        } catch (webhookError) {
          console.error('Webhook delivery failed:', webhookError);
        }
      } else if (!emailOk) {
        console.warn('Lead not saved: rejected email domain or pattern:', email);
        text = `${text}\n\nThat address looks like a test or placeholder—could you share a real inbox you use (Gmail, Outlook, iCloud, etc.)?`.trim();
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
