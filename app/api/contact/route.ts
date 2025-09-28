import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const clean = (v?: string) =>
  (v ?? "").trim().replace(/^"(.*)"$/, "$1").replace(/\r?\n/g, "");

const isEmail = (s: string) => /^[^\s<>@]+@[^\s<>@]+\.[^\s<>@]+$/.test(s);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const FROM = clean(process.env.EMAIL_FROM); // e.g. Gastronomist International <onboarding@resend.dev>
    const TO_RAW = clean(process.env.CONTACT_TO); // e.g. gastronomist.intl@gmail.com
    const TO = isEmail(TO_RAW) ? TO_RAW : "";

    if (!FROM || !TO) {
      return NextResponse.json(
        { error: "Email config missing or invalid. Set EMAIL_FROM and CONTACT_TO properly." },
        { status: 400 }
      );
    }

    const html = `
      <h2>New Contact</h2>
      <p><b>Name:</b> ${clean(body.name)}</p>
      <p><b>Email:</b> ${clean(body.email)}</p>
      <p><b>Address:</b> ${clean(body.address)}</p>
      <p><b>Position:</b> ${clean(body.currentPosition)}</p>
      <p><b>Company:</b> ${clean(body.currentCompany)}</p>
      <p><b>Experience:</b> ${clean(body.experience)}</p>
      <p><b>Reason:</b> ${clean(body.reason)}</p>
    `;

    const { error } = await resend.emails.send({
      from: FROM,
      to: [TO],
      subject: "Gastronomist International — Contact",
      html,
      replyTo: clean(body.email),
    });

    if (error) return NextResponse.json({ error: error.message }, { status: 422 });
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Email send failed" }, { status: 500 });
  }
}
