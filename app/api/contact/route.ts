import nodemailer from 'nodemailer'
import { NextRequest, NextResponse } from 'next/server'


export async function POST(req: NextRequest) {
const body = await req.json()
const required = ['name','address','email','currentPosition','currentCompany','experience','reason']
for (const k of required) if (!body?.[k]) return NextResponse.json({ error: `Missing ${k}` }, { status: 400 })


const transporter = nodemailer.createTransport({
host: process.env.SMTP_HOST,
port: Number(process.env.SMTP_PORT || 587),
secure: false,
auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS }
})


const to = process.env.CONTACT_TO || 'gastronomist.intl@gmail.com'
const from = process.env.SMTP_FROM || 'no-reply@gastronomist.example'


const html = `
<h2>New Membership Request</h2>
<p><b>Name:</b> ${body.name}</p>
<p><b>Address:</b> ${body.address}</p>
<p><b>Email:</b> ${body.email}</p>
<p><b>Current Position:</b> ${body.currentPosition}</p>
<p><b>Current Company:</b> ${body.currentCompany}</p>
<p><b>Experience:</b> ${body.experience}</p>
<p><b>Reason:</b> ${body.reason}</p>
`


try {
await transporter.sendMail({ to, from, subject: 'Gastronomist International — Membership Request', html })
return NextResponse.json({ ok: true })
} catch (err) {
return NextResponse.json({ error: 'Email send failed' }, { status: 500 })
}
}