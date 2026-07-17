const nodemailer = require('nodemailer');

const sendEmail = async ({ subject, html }) => {
  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER?.trim(),
        pass: process.env.EMAIL_PASS?.trim(),
      },
    });

    const mailOptions = {
      from: `"Cllero Website" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER, // Sending to the same email as requested
      subject: subject,
      html: html,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent: ' + info.response);
    return true;
  } catch (error) {
    console.error('Error sending email:', error);
    return false;
  }
};

module.exports = sendEmail;
