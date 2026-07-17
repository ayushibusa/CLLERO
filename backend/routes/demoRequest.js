const express = require('express');
const { body, validationResult } = require('express-validator');
const sendEmail = require('../utils/sendEmail');

const router = express.Router();

router.post(
  '/',
  [
    body('name').notEmpty().withMessage('Name is required'),
    body('email').isEmail().withMessage('Valid email is required'),
    body('gymName').notEmpty().withMessage('Gym name is required'),
    body('phone').notEmpty().withMessage('Phone number is required'),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      // Send email notification directly (no database saving)
      const { name, email, gymName, phone, message } = req.body;
      const htmlContent = `
        <h2>New Demo Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Gym Name:</strong> ${gymName}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong> ${message || 'N/A'}</p>
      `;
      
      const emailSent = await sendEmail({
        subject: `New Demo Request from ${name} - ${gymName}`,
        html: htmlContent
      });

      if (emailSent) {
        res.status(201).json({ message: 'Demo request submitted successfully' });
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
