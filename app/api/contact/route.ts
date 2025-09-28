import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const FROM = process.env.EMAIL_FROM!;
const TO = process.env.CONTACT_TO!;

export async function POST(req: NextRequest) {
  try {
    if (!process.env.RESEND_API_KEY || !FROM || !TO) {
      return NextResponse.json({ error: "Missing email env vars" }, { status: 500 });
    }

    const body = await req.json();
    const required = ["name", "email", "address", "currentPosition", "currentCompany", "experience", "reason"];
    for (const k of required) {
      if (!body?.[k]) return NextResponse.json({ error: `Missing field: ${k}` }, { status: 400 });
    }

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

    await resend.emails.send({
      from: FROM,
      to: TO,
      subject: "Gastronomist International — Contact",
      html,
      replyTo: body.email,
    });

    return NextResponse.json({ ok: true });
  } catch (e) {
    return NextResponse.json({ error: "Email send failed" }, { status: 500 });
  }
}
