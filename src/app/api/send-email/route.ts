import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

function generateEmailHTML(name: string, email: string, whatsapp: string, message: string) {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <style>
          body {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
          }
          .container {
            max-width: 600px;
            margin: 40px auto;
            background: #ffffff;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          }
          .header {
            background: linear-gradient(135deg, #0D7769 0%, #38DDBC 100%);
            padding: 30px 40px;
            text-align: center;
          }
          .header h1 {
            margin: 0;
            color: #ffffff;
            font-size: 28px;
            font-weight: 700;
          }
          .content {
            padding: 40px;
          }
          .field {
            margin-bottom: 24px;
          }
          .label {
            font-size: 12px;
            font-weight: 600;
            text-transform: uppercase;
            color: #0D7769;
            letter-spacing: 0.5px;
            margin-bottom: 8px;
            display: block;
          }
          .value {
            font-size: 16px;
            color: #333;
            background: #f8f9fa;
            padding: 12px 16px;
            border-radius: 8px;
            border-left: 3px solid #38DDBC;
          }
          .message-box {
            background: #f8f9fa;
            padding: 20px;
            border-radius: 8px;
            border-left: 3px solid #38DDBC;
            font-size: 16px;
            line-height: 1.8;
            white-space: pre-wrap;
            color: #333;
          }
          .footer {
            background: #f8f9fa;
            padding: 24px 40px;
            text-align: center;
            font-size: 13px;
            color: #666;
            border-top: 1px solid #e0e0e0;
          }
          .divider {
            height: 1px;
            background: linear-gradient(90deg, rgba(56, 221, 188, 0) 0%, #38DDBC 50%, rgba(56, 221, 188, 0) 100%);
            margin: 24px 0;
          }
          a {
            color: #0D7769;
            text-decoration: none;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>📧 New Contact Form Submission</h1>
          </div>
          
          <div class="content">
            <div class="field">
              <span class="label">Name</span>
              <div class="value">${name}</div>
            </div>
            
            <div class="field">
              <span class="label">Email</span>
              <div class="value">
                <a href="mailto:${email}">${email}</a>
              </div>
            </div>
            
            ${whatsapp ? `
            <div class="field">
              <span class="label">WhatsApp</span>
              <div class="value">
                <a href="https://wa.me/${whatsapp.replace(/\D/g, '')}" style="color: #25D366;">${whatsapp}</a>
              </div>
            </div>
            ` : ''}
            
            <div class="divider"></div>
            
            <div class="field">
              <span class="label">Message</span>
              <div class="message-box">${message}</div>
            </div>
          </div>
          
          <div class="footer">
            <p style="margin: 0 0 8px 0;">
              <strong>Codify Agency</strong>
            </p>
            <p style="margin: 0; color: #999;">
              This email was sent from your website contact form
            </p>
          </div>
        </div>
      </body>
    </html>
  `;
}

export async function POST(req: NextRequest) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: 'RESEND_API_KEY is not configured' },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);
    const { name, email, whatsapp, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    const htmlContent = generateEmailHTML(name, email, whatsapp || '', message);

    const { data, error } = await resend.emails.send({
      from: 'Codify Agency <onboarding@resend.dev>', 
      to: ['contact@codify-agency.com'], 
      replyTo: email, 
      subject: `New Contact Form Submission from ${name}`,
      html: htmlContent,
    });

    if (error) {
      console.error('Resend Error:', error);
      return NextResponse.json(
        { error: 'Failed to send email', details: error },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { 
        success: true, 
        message: 'Email sent successfully',
        messageId: data?.id 
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Server Error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

