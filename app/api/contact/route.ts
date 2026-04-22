import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const CLIENT_EMAIL = process.env.CLIENT_EMAIL || 'zac@zcubed.digital'

function getResend() {
  return new Resend(process.env.RESEND_API_KEY)
}

export async function POST(request: Request) {
  try {
    const { name, email, phone, message } = await request.json()

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required.' },
        { status: 400 }
      )
    }

    const resend = getResend()
    await resend.emails.send({
      from: 'Rock N Soul Suite <contact@zcubed.digital>',
      to: CLIENT_EMAIL,
      replyTo: email,
      subject: `New enquiry from ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0A0807; margin-bottom: 24px;">New bar enquiry</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; color: #544037; font-size: 14px; vertical-align: top; width: 80px;">Name</td>
              <td style="padding: 8px 0; color: #0A0807; font-size: 14px;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #544037; font-size: 14px; vertical-align: top;">Email</td>
              <td style="padding: 8px 0; color: #0A0807; font-size: 14px;">${email}</td>
            </tr>
            ${phone ? `
            <tr>
              <td style="padding: 8px 0; color: #544037; font-size: 14px; vertical-align: top;">Phone</td>
              <td style="padding: 8px 0; color: #0A0807; font-size: 14px;">${phone}</td>
            </tr>
            ` : ''}
            <tr>
              <td style="padding: 8px 0; color: #544037; font-size: 14px; vertical-align: top;">Message</td>
              <td style="padding: 8px 0; color: #0A0807; font-size: 14px; white-space: pre-wrap;">${message}</td>
            </tr>
          </table>
        </div>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Failed to send message.' },
      { status: 500 }
    )
  }
}
