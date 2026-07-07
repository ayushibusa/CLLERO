import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Configure Nodemailer transporter with Gmail app password credentials
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "Admin@cllero.com",
        pass: "nzbm kevj idaj pzxn",
      },
    });

    const mailOptions = {
      from: `"Cllero Contact Form" <Admin@cllero.com>`,
      to: "Admin@cllero.com",
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
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: "Email sent successfully" });
  } catch (error: any) {
    console.error("Error sending email:", error);
    
    let errorMessage = "Failed to send email. Please check your network or try again.";
    
    if (error.code === "EAUTH" || (error.message && error.message.includes("534-5.7.9"))) {
      errorMessage = "Google security blocked this login request as unrecognized. Please visit: https://accounts.google.com/DisplayUnlockCaptcha while logged into Admin@cllero.com on your web browser to authorize the server's location, or double check your app password.";
    }

    return NextResponse.json(
      { error: errorMessage, details: error.message },
      { status: 500 }
    );
  }
}
