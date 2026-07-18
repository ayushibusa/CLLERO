const express = require('express');
const { body, validationResult } = require('express-validator');
const sendEmail = require('../utils/sendEmail');

const router = express.Router();

router.post(
  '/',
  [
    body('name').notEmpty().withMessage('Name is required'),
    body('email').isEmail().withMessage('Valid email is required'),
    body('subject').notEmpty().withMessage('Subject is required'),
    body('message').notEmpty().withMessage('Message is required'),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      // Send email notification directly (no database saving)
      const { name, email, subject, message } = req.body;
      const htmlContent = `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong><br/>${message.replace(/\n/g, '<br/>')}</p>
      `;

      const emailSent = await sendEmail({
        subject: `New Contact Message: ${subject}`,
        html: htmlContent
      });

      if (emailSent) {
        res.status(201).json({ message: 'Message sent successfully' });
      } else {
        res.status(500).json({ message: 'Failed to send email' });
      }
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server error' });
    }
  }
);

module.exports = router;
