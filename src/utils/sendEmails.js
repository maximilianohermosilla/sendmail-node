import nodeMailer from 'nodemailer';
//const nodeMailer = require("nodemailer");

const sendEmails = async (options) => {
    const transporter = nodeMailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        service: process.env.SMTP_SERVICE,
        auth: {
            user: process.env.SMTP_MAIL,
            pass: process.env.SMTP_APP_PASS
        },
    });

    const mailOptions = {
        from: process.env.SMTP_MAIL,
        to: options.to,
        subject: options.subject,
        html: options.message,
    };

    await transporter.sendMail(mailOptions);
};

export default sendEmails;
//module.exports = sendEmail;