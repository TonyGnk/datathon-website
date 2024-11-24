import sgMail from '@sendgrid/mail';
import QRCode from 'qrcode';
import path from 'path';
import fs from 'fs/promises';

// Example usage with SendGrid's own file attachment API
async function generateEmailWithSendGridAttachments(teamData) {
    const emailHtml = `
        <!DOCTYPE html>
        <html>
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Team Registration Confirmation</title>
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        background-color: #DAB605;
                        color: #333;
                        line-height: 1.6;
                        margin: 0;
                        padding: 0;
                    }

                    .container {
                        max-width: 600px;
                        margin: 20px auto;
                        background: #fff;
                        border-radius: 8px;
                        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                        overflow: hidden;
                    }

                    .header {
                        background-color: #DAB605;
                        color: #fff;
                        padding: 20px;
                        border-radius: 8px;
                        text-align: center;
                    }

                    .header h1 {
                        margin: 0;
                        font-size: 24px;
                    }

                    .content {
                        padding: 20px;
                    }

                    .content h2 {
                        color: #E4C31A;
                        margin-top: 0;
                    }

                    .team-info {
                        margin-bottom: 20px;
                    }

                    .team-info p {
                        margin: 5px 0;
                    }

                    .members {
                        margin-bottom: 20px;
                    }

                    .member {
                        border: 1px solid #ddd;
                        border-radius: 5px;
                        padding: 10px;
                        margin-bottom: 10px;
                    }

                    .footer {
                        background-color: #f1f1f1;
                        padding: 15px;
                        text-align: center;
                        font-size: 14px;
                        color: #666;
                    }

                    .qr-code {
                        text-align: center;
                        margin-top: 20px;
                    }

                    .qr-code img {
                        width: 100%; /* Make the image fill its container */
                        max-width: 330px; /* Keep the image at a reasonable size */
                        height: auto; /* Maintain aspect ratio */
                        border: 1px solid #ddd;
                        border-radius: 8px;
                        display: block; /* Ensure it behaves predictably inside its container */
                        margin: 0 auto; /* Center the QR code */
                    }

                    a {
                        color: #0073e6;
                        text-decoration: none;
                    }

                    a:hover {
                        text-decoration: underline;
                    }
                </style>
            </head>
        <body>
            <div class="container">
                <div class="header">
                    <h1>Datathon UoM</h1>
                </div>
                <div class="content">
                    <div class="team-info">
                        <h3>Πληροφορίες Ομάδας</h3>
                        <p><strong>Όνομα Ομάδας:</strong> ${teamData.teamName}</p>
                        <p><strong>Κατηγορία Συμμετοχής:</strong> ${teamData.category === 'development' ? 'Ανάπτυξη Εφαρμογής' : 'Εύρεση Ιδέας'}</p>
                        <p><strong>Συγχώνευση με άλλη ομάδα: </strong>${teamData.autoTeam ? 'Ναι' : 'Όχι'}</p>
                    </div>

                    <div class="members">
                        <h3>Μέλη Ομάδας</h3>
                        ${teamData.members.map((member, index) => `
                            <div class="member">
                                <p><strong>Ονοματεπώνυμο:</strong> ${member.name}</p>
                                <p><strong>Email:</strong> ${member.email}</p>
                                <p><strong>Σχολή Φοίτησης:</strong> ${member.school || 'N/A'}</p>
                                <p><strong>Αντικείμενο Σπουδών:</strong> ${member.subject || 'N/A'}</p>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        </body>
        </html>
    `;

    const msg = {
        to: process.env.ORGANIZER_EMAIL,
        from: {
            email: process.env.SENDER_EMAIL,
            name: 'Datathon Registration'
        },
        subject: `Νέα εγγραφή! ${teamData.teamName}`,
        html: emailHtml,
    };

    await sgMail.send(msg);
}


async function generateEmailToMember(teamData, id, index, name, email) {
    // Generate QR codes as buffers
    const qrBuffer = await QRCode.toBuffer(`${id}${index}`);

    const memberAttachments = [{
        filename: `qr-${id}${index}.png`,
        content: qrBuffer.toString('base64'),
        type: 'image/png',
        disposition: 'inline',
        content_id: `qr-${id}${index}`
    }];

    const emailHtml = `
   <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Registration Confirmation</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #DAB605;
            color: #333;
            line-height: 1.6;
            margin: 0;
            padding: 0;
        }

        .container {
            max-width: 600px;
            margin: 20px auto;
            background: #fff;
            border-radius: 8px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            overflow: hidden;
        }

        .header {
            background-color: #DAB605;
            color: #fff;
            padding: 20px;
            border-radius: 8px;
            text-align: center;
        }

        .header h1 {
            margin: 0;
            font-size: 24px;
        }

        .content {
            padding: 20px;
        }

        .content h2 {
            color: #E4C31A;
            margin-top: 0;
        }

        .team-info {
            margin-bottom: 20px;
        }

        .team-info p {
            margin: 5px 0;
        }

        .members {
            margin-bottom: 20px;
        }

        .member {
            border: 1px solid #ddd;
            border-radius: 5px;
            padding: 10px;
            margin-bottom: 10px;
        }

        .footer {
            background-color: #f1f1f1;
            padding: 15px;
            text-align: center;
            font-size: 14px;
            color: #666;
        }

        .qr-code {
            text-align: center;
            margin-top: 20px;
        }

        .qr-code img {
            width: 100%; /* Make the image fill its container */
            max-width: 330px; /* Keep the image at a reasonable size */
            height: auto; /* Maintain aspect ratio */
            border: 1px solid #ddd;
            border-radius: 8px;
            display: block; /* Ensure it behaves predictably inside its container */
            margin: 0 auto; /* Center the QR code */
        }

        a {
            color: #0073e6;
            text-decoration: none;
        }

        a:hover {
            text-decoration: underline;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>Datathon UoM</h1>
        </div>
        <div class="content">
            <h2>Η εγγραφή σας ολοκληρώθηκε με επιτυχία!</h2>
            <p>Σας καλωσορίζουμε στο Datathon UoM 2024 και σας ευχόμαστε καλή επιτυχία!</p>
            <p>Παρακάτω θα βρείτε τα στοιχεία της ομάδας σας. Εάν διαπιστώσετε κάποιο λάθος, παρακαλούμε επικοινωνήστε μαζί μας σε αυτό το μήνυμα.</p>

            <div class="team-info">
                <h3>Πληροφορίες Ομάδας</h3>
                <p><strong>Όνομα Ομάδας:</strong> ${teamData.teamName}</p>
                <p><strong>Κατηγορία Συμμετοχής:</strong> ${teamData.category === 'development' ? 'Ανάπτυξη Εφαρμογής' : 'Εύρεση Ιδέας'}</p>
                <p><strong>Συγχώνευση με άλλη ομάδα: </strong>${teamData.autoTeam ? 'Ναι' : 'Όχι'}</p>
            </div>

            <div class="members">
                <h3>Μέλη Ομάδας</h3>
                ${teamData.members.map((member, index) => `
                    <div class="member">
                        <p><strong>Ονοματεπώνυμο:</strong> ${member.name}</p>
                        <p><strong>Email:</strong> ${member.email}</p>
                        <p><strong>Σχολή Φοίτησης:</strong> ${member.school || 'N/A'}</p>
                        <p><strong>Αντικείμενο Σπουδών:</strong> ${member.subject || 'N/A'}</p>
                    </div>
                `).join('')}
            </div>

            <div class="qr-code">
                <h3>Προσωπικός Κωδικός Ταυτοποίησης</h3>
                <img src="cid:qr-${id}${index}" alt="QR Code">
            </div>
        </div>
        <div class="footer">
            <p>Για περισσότερες πληροφορίες επικοινωνήστε μαζί μας.</p>
            <p><a href="mailto:datathon@uom.edu.gr">datathon@uom.edu.gr</a></p>
        </div>
    </div>
</body>
</html>
    `;

    const msg = {
        to: email,
        from: {
            email: process.env.SENDER_EMAIL,
            name: 'Datathon Registration'
        },
        subject: `Datathon UoM - Μήνυμα Επιτυχούς Εγγραφής`,
        html: emailHtml,
        attachments: memberAttachments
    };

    await sgMail.send(msg);
}


export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        const { teamName, category, members, autoTeam, teamId } = req.body;

        if (!teamName || !category || !members?.length) {
            return res.status(400).json({ error: 'Missing required fields' });
        }

        const teamData = { teamName, category, members, autoTeam, teamId };


        await generateEmailWithSendGridAttachments(teamData);

        //For every member run the gerateEmailToMember function
        teamData.members.forEach((member, index) => {
            generateEmailToMember(teamData, teamData.teamId, index, member.name, member.email);
        });

        return res.status(200).json({
            success: true,
            message: 'Registration email sent successfully'
        });

    } catch (error) {
        console.error('Error processing registration:', error);
        return res.status(500).json({
            success: false,
            error: 'Failed to process registration',
            details: error.message
        });
    }
}