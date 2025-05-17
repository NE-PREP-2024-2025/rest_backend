import nodemailer from "nodemailer";
import fs from "fs";
import dotenv from "dotenv";
import path from "path";
dotenv.config();
/**
 * Send an email to the specified recipient with the given subject
 * and content data.
 * 
 * The content data object should contain the keys that will be replaced
 * in the email template. The template should contain the keys enclosed 
 * in double curly braces, e.g. {{key}}.
 * 
 * @param {object} data - Data object containing the keys and values
 * to replace in the email template.
 * @param {string} toEmail - The email address of the recipient.
 * @param {string} subject - The subject of the email.
 * @param {string} templateName - The name of the email template.
 * @returns {Promise<void>}
 */
async function sendMail(data:any, toEmail:string, subject:string, templateName:string) {
    const contentToBeReplaced = data ? Object.keys(data) : [];

    const templatePath = path.join(__dirname, `../templates/${templateName}.html`);
    let template = fs.readFileSync(templatePath, 'utf8');

    contentToBeReplaced.forEach((content) => {
        template = template.replace(`{{${content}}}`, data[content]);
    });
     
    const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: parseInt(process.env.SMTP_PORT || "587", 10),
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASSWORD
        },
        secure: process.env.SMTP_SECURE === "true"
    } as nodemailer.TransportOptions);

    const mailOptions = {
        
        from: process.env.SENDER_EMAIL,
        to: toEmail,
        subject: subject,
        html: template
    };

    await transporter.sendMail(mailOptions);
}
export default sendMail