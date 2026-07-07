import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// To send emails on Vercel without Google security blocks, get a free Access Key
// from https://web3forms.com (takes 10 seconds) and paste it here or set it as WEB3FORMS_KEY in your env.
const WEB3FORMS_KEY = process.env.WEB3FORMS_KEY || "";

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Path 1: If Web3Forms key is configured, use it (recommended for Vercel/production)
    if (WEB3FORMS_KEY && WEB3FORMS_KEY !== "") {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          name: name,
          email: email,
          message: message,
          subject: `New Cllero Inquiry from ${name}`,
          from_name: "Cllero Contact Form",
          // Send a copy to the user as well
          replyto: email,
        }),
      });

      const resData = await response.json();
      if (response.ok && resData.success) {
        return NextResponse.json({ success: true, message: "Email sent successfully via Web3Forms" });
      } else {
        throw new Error(resData.message || "Web3Forms submission failed");
      }
    }

    // Path 2: Fallback to direct Gmail SMTP (works on localhost, but blocked by Google on Vercel)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "Admin@cllero.com",
        pass: "nzbm kevj idaj pzxn",
      },
    });

    const mailOptions = {
      from: `"Cllero Contact Form" <Admin@cllero.com>`,
      to: `Admin@cllero.com, ${email}`,
      replyTo: email,
      subject: `New Inquiry from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; color: #333; max-width: 600px; border: 1px solid #eee; border-radius: 8px;">
          <h2 style="color: #06b6d4; border-bottom: 2px solid #f0f9ff; padding-bottom: 10px; margin-top: 0;">New Cllero Inquiry</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <div style="margin-top: 20px; padding: 15px; background-color: #f8fafc; border-radius: 6px; border-left: 4px solid #06b6d4;">
            <p style="margin: 0; white-space: pre-wrap; line-height: 1.6;">${message}</p>
          </div>
          <p style="font-size: 10px; color: #999; margin-top: 20px;">This is a copy of the inquiry sent to Admin@cllero.com</p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: "Email sent successfully via Gmail SMTP" });
  } catch (error: any) {
    console.error("Error sending email:", error);
    
    let errorMessage = "Failed to send email. Please check your network or try again.";
    
    if (error.code === "EAUTH" || (error.message && error.message.includes("534-5.7.9")) || error.message?.toLowerCase().includes("block") || error.message?.toLowerCase().includes("login")) {
      errorMessage = "Google security blocked this login request as unrecognized (standard Vercel datacenter block). To fix this instantly:\n\n1. Visit https://web3forms.com\n2. Enter Admin@cllero.com to receive a free Access Key\n3. Set WEB3FORMS_KEY in your Vercel project Environment Variables (or paste it directly in src/app/api/contact/route.ts at line 6).";
    }

    return NextResponse.json(
      { error: errorMessage, details: error.message },
      { status: 500 }
    );
  }
}
