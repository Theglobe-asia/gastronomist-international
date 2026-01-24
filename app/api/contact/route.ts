import { NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

// Free-mode: Resend only allows sending to the account owner email
const OWNER_EMAIL = "blackchef.alex@gmail.com"

const clean = (v?: string) =>
  (v ?? "").trim().replace(/^"(.*)"$/, "$1").replace(/\r?\n/g, "")

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()

    const FROM =
      clean(process.env.EMAIL_FROM) ||
      "Gastronomist International <onboarding@resend.dev>"

    const html = `
      <h2>New Contact</h2>
      <p><b>Name:</b> ${clean(body.name)}</p>
      <p><b>Email:</b> ${clean(body.email)}</p>
      <p><b>Address:</b> ${clean(body.address)}</p>
      <p><b>Position:</b> ${clean(body.currentPosition)}</p>
      <p><b>Company:</b> ${clean(body.currentCompany)}</p>
      <p><b>Experience:</b> ${clean(body.experience)}</p>
      <p><b>Reason:</b> ${clean(body.reason)}</p>
    `

    const { error } = await resend.emails.send({
      from: FROM,
      to: [OWNER_EMAIL],
      subject: "Gastronomist International — Contact",
      html,
      replyTo: clean(body.email),
    })

    if (error) return NextResponse.json({ error: error.message }, { status: 422 })
    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ error: "Email send failed" }, { status: 500 })
  }
}
