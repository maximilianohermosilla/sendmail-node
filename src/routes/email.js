import express from 'express';
import sendEmail from '../controllers/email.js';

const router = express.Router();
//const { sendEmail } = require('../controllers/email.js');

router.post('/email', sendEmail);

export default router;
//module.exports = router;