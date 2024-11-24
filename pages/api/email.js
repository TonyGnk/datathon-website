// pages/api/send-email.js
import sgMail from '@sendgrid/mail';

if (!process.env.SENDGRID_API_KEY) {
    throw new Error('SENDGRID_API_KEY environment variable is not set');
}

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    try {
        const { teamName, category, members, autoTeam } = req.body;

        // Email to organizers
        const organizerEmail = {
            to: "datathon@uom.edu.gr", // Add this to your .env.local
            from: "datathon@uom.edu.gr", // Add this to your .env.local
            subject: `New Datathon Registration: ${teamName}`,
            html: `
        <h2>New Team Registration</h2>
        <p><strong>Team Name:</strong> ${teamName}</p>
        <p><strong>Category:</strong> ${category}</p>
        <p><strong>Auto Team Formation:</strong> ${autoTeam ? 'Yes' : 'No'}</p>
        <h3>Team Members:</h3>
        <ul>
          ${members.map(member => `
            <li>
              <p><strong>Name:</strong> ${member.name}</p>
              <p><strong>Email:</strong> ${member.email}</p>
              <p><strong>School:</strong> ${member.school}</p>
              <p><strong>Subject:</strong> ${member.subject}</p>
            </li>
          `).join('')}
        </ul>
      `
        };

        // Email to team members
        const memberEmails = members.map(member => ({
            to: member.email,
            from: "datathon@uom.edu.gr",
            subject: 'Datathon Registration Confirmation',
            html: `
        <h2>Ευχαριστούμε για την εγγραφή σας στο Datathon!</h2>
        <p>Η εγγραφή σας έχει ληφθεί επιτυχώς.</p>
        <p><strong>Όνομα Ομάδας:</strong> ${teamName}</p>
        <p><strong>Κατηγορία:</strong> ${category}</p>
        <h3>Μέλη Ομάδας:</h3>
        <ul>
          ${members.map(m => `<li>${m.name} (${m.email})</li>`).join('')}
        </ul>
        <p>Θα επικοινωνήσουμε σύντομα μαζί σας με περισσότερες πληροφορίες.</p>
      `
        }));

        // Send all emails concurrently
        const emailPromises = [
            sgMail.send(organizerEmail),
            ...memberEmails.map(email => sgMail.send(email))
        ];

        await Promise.all(emailPromises);

        res.status(200).json({ success: true });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({
            success: false,
            error: 'Failed to send emails',
            details: error?.response?.body?.errors || error.message
        });
    }
}