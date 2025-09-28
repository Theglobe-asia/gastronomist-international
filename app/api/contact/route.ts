import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

// sanitize envs (strip quotes/CRLF)
const FROM = (process.env.EMAIL_FROM ?? "").trim().replace(/^"(.*)"$/, "$1");
const TO = (process.env.CONTACT_TO ?? "").trim();

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const html = `
      <h2>New Contact</h2>
      <p><b>Name:</b> ${body.name}</p>
      <p><b>Email:</b> ${body.email}</p>
      <p><b>Address:</b> ${body.address}</p>
      <p><b>Position:</b> ${body.currentPosition}</p>
      <p><b>Company:</b> ${body.currentCompany}</p>
      <p><b>Experience:</b> ${body.experience}</p>
      <p><b>Reason:</b> ${body.reason}</p>
    `;

    const { error } = await resend.emails.send({
      from: FROM,           // e.g. Gastronomist International <onboarding@resend.dev>
      to: [TO],             // e.g. gastronomist.intl@gmail.com
      subject: "Gastronomist International — Contact",
      html,
      replyTo: body.email,  // NOTE: replyTo (not reply_to)
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: error.message }, { status: 422 });
    }
    return NextResponse.json({ ok: true });
  } catch (e: any) {
    console.error(e);
    return NextResponse.json({ error: "Email send failed" }, { status: 500 });
  }
}
