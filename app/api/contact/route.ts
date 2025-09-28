// app/api/contact/route.ts
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs"; // Resend needs the Node runtime

const resend = new Resend(process.env.RESEND_API_KEY);

type ContactPayload = {
  name: string;
  address: string;
  email: string;
  currentPosition: string;
  currentCompany: string;
  experience: string;
  reason: string;
};

const esc = (v: unknown) =>
  String(v ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as Partial<ContactPayload>;

    // Basic required fields
    const required: (keyof ContactPayload)[] = [
      "name",
      "address",
      "email",
      "currentPosition",
      "currentCompany",
      "experience",
      "reason",
    ];
    for (const k of required) {
      if (!body[k]) {
        return NextResponse.json({ error: `Missing: ${k}` }, { status: 400 });
      }
    }

    const from = process.env.EMAIL_FROM || "";
    const to = process.env.CONTACT_TO || "";

    if (!from || !to) {
      return NextResponse.json(
        { error: "Server email configuration missing" },
        { status: 500 }
      );
    }

    const html = `
      <div style="font-family:system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;font-size:14px;line-height:1.6">
        <h2 style="margin:0 0 8px">New Membership Request</h2>
        <table style="border-collapse:collapse">
          <tbody>
            <tr><td style="padding:4px 8px"><b>Name</b></td><td style="padding:4px 8px">${esc(body.name)}</td></tr>
            <tr><td style="padding:4px 8px"><b>Email</b></td><td style="padding:4px 8px">${esc(body.email)}</td></tr>
            <tr><td style="padding:4px 8px"><b>Address</b></td><td style="padding:4px 8px">${esc(body.address)}</td></tr>
            <tr><td style="padding:4px 8px"><b>Current Position</b></td><td style="padding:4px 8px">${esc(body.currentPosition)}</td></tr>
            <tr><td style="padding:4px 8px"><b>Current Company</b></td><td style="padding:4px 8px">${esc(body.currentCompany)}</td></tr>
            <tr><td style="padding:4px 8px"><b>Experience</b></td><td style="padding:4px 8px">${esc(body.experience)}</td></tr>
            <tr><td style="padding:4px 8px"><b>Reason</b></td><td style="padding:4px 8px">${esc(body.reason)}</td></tr>
          </tbody>
        </table>
      </div>
    `;

    const text = `New Membership Request
Name: ${body.name}
Email: ${body.email}
Address: ${body.address}
Current Position: ${body.currentPosition}
Current Company: ${body.currentCompany}
Experience: ${body.experience}
Reason: ${body.reason}
`;

    const { error } = await resend.emails.send({
      from,          // e.g. Gastronomist International <onboarding@resend.dev>
      to,            // your destination inbox (CONTACT_TO)
      subject: "Gastronomist International — Membership Request",
      html,
      text,
      replyTo: body.email!, // ✅ correct key
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "Email send failed" }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Email send failed" }, { status: 500 });
  }
}
