import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const required = ["name","address","email","currentPosition","currentCompany","experience","reason"];
  for (const k of required) if (!body?.[k]) {
    return NextResponse.json({ error: `Missing ${k}` }, { status: 400 });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);
  const to = process.env.CONTACT_TO || "gastronomist.intl@gmail.com";
  const from = process.env.EMAIL_FROM || "Gastronomist International <onboarding@resend.dev>";

  const html = `
    <h2>New Membership Request</h2>
    <p><b>Name:</b> ${body.name}</p>
    <p><b>Address:</b> ${body.address}</p>
    <p><b>Email:</b> ${body.email}</p>
    <p><b>Current Position:</b> ${body.currentPosition}</p>
    <p><b>Current Company:</b> ${body.currentCompany}</p>
    <p><b>Experience:</b> ${body.experience}</p>
    <p><b>Reason:</b> ${body.reason}</p>
  `;

  try {
    const { data, error } = await resend.emails.send({ from, to, subject: "Gastronomist International — Membership Request", html });
    if (error) return NextResponse.json({ error: error.message }, { status: 500 });
    return NextResponse.json({ ok: true, id: data?.id });
  } catch (e: any) {
    return NextResponse.json({ error: e?.message || "Email send failed" }, { status: 500 });
  }
}
