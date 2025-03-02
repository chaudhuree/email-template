const nodemailer = require('nodemailer');
require('dotenv').config(); // Load environment variables

// Configure Mailtrap transporter (reusable)
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// Function to send email with a specified template
async function sendMailtrapEmail(to, subject, template, data = {}) {
  try {
    const mailOptions = {
      from: process.env.EMAIL_FROM || 'noreply@example.com', // Sender address
      to: to,
      subject: subject,
      html: template(data), // Pass the data to the template function
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', info.messageId);
    return info;
  } catch (error) {
    console.error('Error sending email: ', error);
    throw error;
  }
}

module.exports = { sendMailtrapEmail };