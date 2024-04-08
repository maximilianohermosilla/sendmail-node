import sendEmails from "../utils/sendEmails.js";
//const sendEmail = require("../utils/sendEmails");
import dotenv from 'dotenv';
dotenv.config();

//require("dotenv").config();

const sendEmail = async (req, res) => {
    try{
        const { email, message } = req.body;

        if (!email){
            return res.status(400).json({ message : "Email requerido"})
        }

        const options = {
            to: email,
            subject: "Test",
            message: message,
        };

        await sendEmails(options);

        res.status(200).json({
            message: "Email enviado con éxito"
        });
    }
    catch(error){
        console.error(error);
        res.status(500).json({ message: "Internal server error" + error });
    }
};

export default sendEmail;