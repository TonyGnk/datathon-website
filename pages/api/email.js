import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        secure: false,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASSWORD
        }
    });

    try {
        await transporter.sendMail({
            from: process.env.SMTP_USER,
            to: req.body.email,
            subject: 'Datathon Registration Confirmation',
            html: `
        <h1>Thanks for registering for the Datathon!</h1>
        <p>Hi ${req.body.name},</p>
        <p>We've received your registration for the upcoming Datathon. Here are your details:</p>
        <ul>
          <li>Skill Level: ${req.body.skill}</li>
          <li>Team Status: ${req.body.team}</li>
        </ul>
        <p>We'll be in touch with more information soon!</p>
      `
        });

        res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ message: 'Failed to send email' });
    }
}