import nodeMailer from 'nodemailer';
//const nodeMailer = require("nodemailer");

const sendEmails = async (options) => {
    console.log("utils")
    console.log(options);
    const transporter = nodeMailer.createTransport({
        host: options.host || process.env.SMTP_HOST,
        port: options.port || process.env.SMTP_PORT,
        service: options.service || process.env.SMTP_SERVICE,
        auth: {
            user: options.user || process.env.SMTP_MAIL,
            pass: options.password || process.env.SMTP_APP_PASS
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