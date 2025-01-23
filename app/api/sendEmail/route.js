import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({
    path: path.resolve(process.cwd(), '.env'),
});

export async function POST(request) {
    const { firstName, lastName, email, phone, service, message } = await request.json();

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_TO,
        subject: `CONTACT FROM PORTFOLIO`,
        text: `Hey! ${firstName} ${lastName} typed this message about the service: ${service}.\n${message}\n\nInfos:\n${email}\n${phone}`,
    };

    try {
        const info = await transporter.sendMail(mailOptions);
        return new Response('Success ' + info.response, { status: 200 });
    } catch (error) {
        console.error('Error:', error);
        return new Response('Error', { status: 500 });
    }
}
