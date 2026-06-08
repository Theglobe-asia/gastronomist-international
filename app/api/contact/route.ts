import { NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

const OWNER_EMAIL = "blackchef.alex@gmail.com"

const clean = (v?: string) =>
  (v ?? "").trim().replace(/^"(.*)"$/, "$1").replace(/\r?\n/g, "")

export async function POST(req: NextRequest) {
  try {
    const apiKey = process.env.RESEND_API_KEY

    if (!apiKey) {
      return NextResponse.json(
        { error: "RESEND_API_KEY is not configured" },
        { status: 500 }
      )
    }

    const resend = new Resend(apiKey)

    const body = await req.json()

    const FROM =
      clean(process.env.EMAIL_FROM) ||
      "Gastronomist International <onboarding@resend.dev>"

    const html = `
      <h2>New Membership Application</h2>

      <p><b>Name:</b> ${clean(body.name)}</p>
      <p><b>Email:</b> ${clean(body.email)}</p>
      <p><b>Address:</b> ${clean(body.address)}</p>
      <p><b>Current Position:</b> ${clean(body.currentPosition)}</p>
      <p><b>Current Company:</b> ${clean(body.currentCompany)}</p>
      <p><b>Experience:</b> ${clean(body.experience)}</p>

      <hr />

      <p><b>Reason for Membership:</b></p>
      <p>${clean(body.reason)}</p>
    `

    const { error } = await resend.emails.send({
      from: FROM,
      to: [OWNER_EMAIL],
      subject: "Gastronomist International — Membership Application",
      html,
      replyTo: clean(body.email),
    })

    if (error) {
      return NextResponse.json(
        { error: error.message },
        { status: 422 }
      )
    }

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error(error)

    return NextResponse.json(
      { error: "Email send failed" },
      { status: 500 }
    )
  }
}