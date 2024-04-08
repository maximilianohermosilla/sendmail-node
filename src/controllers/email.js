import sendEmails from "../utils/sendEmails.js";
//const sendEmail = require("../utils/sendEmails");
import dotenv from 'dotenv';
dotenv.config();

//require("dotenv").config();

const sendEmail = async (req, res) => {
    try{
        console.log(req);

        const { email, subject, message, host, service, port, user, password } = req.body;

        if (!email){
            return res.status(400).json({ message : "Email requerido"})
        }

        console.log(req.body);

        const options = {
            to: email,
            subject: subject,
            message: message,
            host: host,
            service: service,
            port: port,
            user: user,
            password: password,
        };

        await sendEmails(options);
        
        if (res != undefined){
            res.status(200).json({
                message: "Email enviado con éxito"
            });
        }
    }
    catch(error){
        console.error(error);
        res.status(500).json({ message: "Internal server error" + error });
    }
};

export default sendEmail;