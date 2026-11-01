// Vercel serverless function: emails the contact form to Shubham.
import nodemailer from 'nodemailer';

const TO = 'shubhamtiwari9508@gmail.com';
const ok = (v, max) => typeof v === 'string' && v.trim().length > 0 && v.length <= max;

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { name, email, subject, message, company } = req.body || {};
  if (company) return res.status(200).json({ ok: true }); // honeypot: bots fill this
  if (!ok(name, 100) || !ok(subject, 150) || !ok(message, 5000) || !ok(email, 200) || !/^\S+@\S+\.\S+$/.test(email))
    return res.status(400).json({ error: 'Please check the form fields.' });
  if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD)
    return res.status(500).json({ error: 'Mail service is not configured.' });
  try {
    const t = nodemailer.createTransport({
      service: 'gmail',
      auth: { user: process.env.GMAIL_USER, pass: process.env.GMAIL_APP_PASSWORD },
    });
    await t.sendMail({
      from: `"Portfolio contact form" <${process.env.GMAIL_USER}>`,
      to: TO,
      replyTo: `${name.replace(/[<>"\r\n]/g, '')} <${email.trim()}>`,
      subject: `Portfolio: ${subject.replace(/[\r\n]/g, ' ')}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    });
    return res.status(200).json({ ok: true });
  } catch (e) {
    console.error(e);
    return res.status(500).json({ error: 'Could not send the message. Please email directly.' });
  }
}
