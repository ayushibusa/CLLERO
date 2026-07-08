import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Gmail credentials — app password must be WITHOUT spaces
const GMAIL_USER = process.env.GMAIL_USER || "jethvashyam0205@gmail.com";
const GMAIL_PASS = process.env.GMAIL_PASS || "wclmzrtxbnmvwdtr"; // spaces removed

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Please fill in all fields before submitting." },
        { status: 400 }
      );
    }

    // Use explicit host/port instead of service:'gmail' — more reliable on Vercel
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true, // SSL
      auth: {
        user: GMAIL_USER,
        pass: GMAIL_PASS,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    const mailOptions = {
      from: `"CLLERO Contact Form" <${GMAIL_USER}>`,
      to: GMAIL_USER, // sends to jethvashyam0205@gmail.com
      replyTo: email, // reply goes directly to the person who submitted
      subject: `New Inquiry from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family: 'Helvetica Neue', sans-serif; padding: 32px; color: #1e293b; max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; border: 1px solid #e2e8f0;">
          <div style="border-bottom: 3px solid #06b6d4; padding-bottom: 16px; margin-bottom: 24px;">
            <h2 style="color: #0f172a; font-size: 22px; margin: 0;">📩 New CLLERO Inquiry</h2>
          </div>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #64748b; font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em; width: 100px;">Name</td>
              <td style="padding: 8px 0; color: #0f172a; font-size: 15px; font-weight: 600;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #64748b; font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em;">Email</td>
              <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #06b6d4; text-decoration: none; font-size: 15px;">${email}</a></td>
            </tr>
          </table>
          <div style="margin-top: 24px; padding: 20px; background: #f8fafc; border-radius: 8px; border-left: 4px solid #06b6d4;">
            <p style="margin: 0; font-size: 13px; font-weight: bold; color: #64748b; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 10px;">Message</p>
            <p style="margin: 0; white-space: pre-wrap; line-height: 1.7; color: #334155; font-size: 15px;">${message}</p>
          </div>
          <p style="font-size: 11px; color: #94a3b8; margin-top: 28px; text-align: center;">Sent via CLLERO contact form · Reply to this email to respond directly to ${name}</p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({
      success: true,
      message: "Your inquiry has been sent successfully!",
    });
  } catch (err: any) {
    console.error("Email error:", err?.message || err);

    let errorMsg = "Failed to send email. Please try again or contact jethvashyam0205@gmail.com.";

    if (err.code === "EAUTH" || err.message?.includes("534") || err.message?.includes("535") || err.code === "ECONNECTION" || err.code === "ETIMEDOUT") {
      errorMsg =
        "We are currently experiencing a technical issue with our email service. Please contact us directly at jethvashyam0205@gmail.com or try again later.";
    }

    return NextResponse.json({ error: errorMsg }, { status: 500 });
  }
}
