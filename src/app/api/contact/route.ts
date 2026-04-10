import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const { name, email, organization, message } = await req.json()

  // Use Resend or any email service - for now log and return success
  // In production add: RESEND_API_KEY to Vercel env vars
  const RESEND_API_KEY = process.env.RESEND_API_KEY

  if (RESEND_API_KEY) {
    try {
      await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: { 'Authorization': `Bearer ${RESEND_API_KEY}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({
          from: 'WFA Global Website <noreply@wfaglobal.com>',
          to: ['contact@wfaglobal.com'],
          subject: `New Contact Form Submission from ${name}`,
          html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Organization:</strong> ${organization}</p><p><strong>Message:</strong></p><p>${message}</p>`,
        }),
      })
    } catch (err) {
      console.error('Email send failed:', err)
    }
  }

  return NextResponse.json({ success: true })
}
