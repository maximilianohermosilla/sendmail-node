import express from 'express';
import sendEmail from '../controllers/email.js';

const router = express.Router();
const app = express();
app.use(express.json());

let testEmail = {
    email: "maxinomemolesten@gmail.com",
    subject: "Asunto prueba",
    message: "mensaje de prueba"
}

console.log(testEmail);
router.post('/email', testEmail, sendEmail);

export default router;
//module.exports = router;