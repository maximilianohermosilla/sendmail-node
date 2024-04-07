const sendEmail = require("../utils/sendEmails");

require("dotenv").config();

exports.sendEmail = async (req, res) => {
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

        await sendEmail(options);

        res.status(200).json({
            message: "Email enviado con éxito"
        });
    }
    catch(error){
        console.error(error);
        res.status(500).json({ message: "Internal server error" + error });
    }
};