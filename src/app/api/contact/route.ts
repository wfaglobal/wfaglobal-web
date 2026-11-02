import { NextRequest, NextResponse } from 'next/server'

// Where each page's form is delivered. The client only sends a page key, never an address.
const RECIPIENTS: Record<string, string> = {
  default: 'contact@wfaglobal.com',
  books: 'ravi@wfaglobal.com',
}

function esc(v: unknown): string {
  return String(v ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

export async function POST(req: NextRequest) {
  const { name, email, organization, topic, message, website, source } = await req.json()

  // Honeypot check — real users never fill this field; bots do
  if (website) {
    return NextResponse.json({ success: true }) // silently discard
  }

  const to = RECIPIENTS[source === 'books' ? 'books' : 'default']
  const subject = source === 'books'
    ? `Books page inquiry${topic ? `: ${topic}` : ''} — ${name}`
    : `New Contact Form Submission from ${name}`

  // Messages are emailed via Resend (RESEND_API_KEY in Vercel env vars).
  // If sending is not possible, return an error so the visitor sees the fallback
  // email address instead of a false "Message Sent".
  const RESEND_API_KEY = process.env.RESEND_API_KEY
  if (!RESEND_API_KEY) {
    console.error('RESEND_API_KEY not set — contact form message was not emailed.')
    return NextResponse.json({ success: false, error: 'email_not_configured' }, { status: 503 })
  }

  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { 'Authorization': `Bearer ${RESEND_API_KEY}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from: 'WFA Global Website <noreply@wfaglobal.com>',
        to: [to],
        reply_to: email,
        subject,
        html:
          `<p><strong>Name:</strong> ${esc(name)}</p>` +
          `<p><strong>Email:</strong> ${esc(email)}</p>` +
          `<p><strong>Organization:</strong> ${esc(organization)}</p>` +
          (topic ? `<p><strong>Topic:</strong> ${esc(topic)}</p>` : '') +
          `<p><strong>Message:</strong></p><p style="white-space:pre-wrap">${esc(message)}</p>`,
      }),
    })
    if (!res.ok) {
      console.error('Resend rejected the email:', res.status, await res.text())
      return NextResponse.json({ success: false, error: 'email_send_failed' }, { status: 502 })
    }
  } catch (err) {
    console.error('Email send failed:', err)
    return NextResponse.json({ success: false, error: 'email_send_failed' }, { status: 502 })
  }

  return NextResponse.json({ success: true })
}
