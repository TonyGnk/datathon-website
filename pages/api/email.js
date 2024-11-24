import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export const sendRegistrationEmail = async (formData) => {
    const { teamName, category, members } = formData;

    // Email to organizers
    const organizerEmail = {
        to: 'your-email@example.com', // Replace with your email
        from: 'your-verified-sender@yourdomain.com', // Must be verified in SendGrid
        subject: `New Datathon Registration: ${teamName}`,
        html: `
      <h2>New Team Registration</h2>
      <p><strong>Team Name:</strong> ${teamName}</p>
      <p><strong>Category:</strong> ${category}</p>
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
        from: 'your-verified-sender@yourdomain.com',
        subject: 'Datathon Registration Confirmation',
        html: `
      <h2>Thank you for registering for the Datathon!</h2>
      <p>Your registration has been received successfully.</p>
      <p><strong>Team Name:</strong> ${teamName}</p>
      <p><strong>Category:</strong> ${category}</p>
      <h3>Team Members:</h3>
      <ul>
        ${members.map(m => `<li>${m.name} (${m.email})</li>`).join('')}
      </ul>
      <p>We will contact you soon with further information.</p>
    `
    }));

    try {
        // Send email to organizers
        await sgMail.send(organizerEmail);

        // Send confirmation emails to all team members
        await Promise.all(memberEmails.map(email => sgMail.send(email)));

        return { success: true };
    } catch (error) {
        console.error('Error sending emails:', error);
        return { success: false, error };
    }
};
