import { NextResponse } from "next/server";
import { Resend } from "resend";

// ─────────────────────────────────────────────────────────────────────────────
// HOW TO SET UP (takes ~2 minutes, completely free):
// 1. Go to https://resend.com and sign up with Admin@cllero.com
// 2. Create a free API key from the dashboard
// 3. Add it to Vercel → Settings → Environment Variables as RESEND_API_KEY
//    OR paste it directly below for local testing:
const RESEND_API_KEY = process.env.RESEND_API_KEY || "";
// ─────────────────────────────────────────────────────────────────────────────

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Please fill in all fields before submitting." },
        { status: 400 }
      );
    }

    // If no API key configured yet, return a helpful setup message
    if (!RESEND_API_KEY) {
      return NextResponse.json(
        {
          error:
            "Email service not configured yet. Please follow these steps:\n1. Sign up free at https://resend.com\n2. Create an API key\n3. Add RESEND_API_KEY to your Vercel Environment Variables",
        },
        { status: 503 }
      );
    }

    const resend = new Resend(RESEND_API_KEY);

    const { error } = await resend.emails.send({
      from: "CLLERO Contact Form <onboarding@resend.dev>",
      to: ["Admin@cllero.com"],
      replyTo: email,
      subject: `New Inquiry from ${name}`,
      html: `
        <div style="font-family: 'Helvetica Neue', sans-serif; padding: 32px; color: #1e293b; max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; border: 1px solid #e2e8f0;">
          <div style="border-bottom: 3px solid #06b6d4; padding-bottom: 16px; margin-bottom: 24px;">
            <h2 style="color: #0f172a; font-size: 22px; margin: 0;">📩 New Cllero Inquiry</h2>
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
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send email. Please try again." },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Your inquiry has been sent successfully!",
    });
  } catch (err: any) {
    console.error("Contact route error:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again later." },
      { status: 500 }
    );
  }
}
