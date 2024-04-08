import handlebars from 'express-handlebars';
import __dirname from './utils.js'
import express from 'express';
import cors from 'cors';
import router from './routes/email.js';
import dotenv from 'dotenv';
dotenv.config();

// const express = require('express');
// const cors = require("cors");
// const handlebars = require('express-handlebars');
// const dirname = require('./utils.js');
//require("dotenv").config();

const PORT = process.env.PORT || 5000;

const app = express();

app.engine('handlebars', handlebars.engine());

app.set('views',__dirname+'/views');
app.set('view engine', 'handlebars');
app.use(express.static(__dirname+'/public'));

app.use(express.json());

app.use(cors({
    origin: ['http://localhost:5000'],
    credentials: true,
}));

//app.use("/api", require("./routes/email"));
app.use("/api", router);

// app.get('/inicio', (req, res) => {
//     res.send("Hola mundo!");
// })

app.get('/', (req, res) => {
    let testEmail = {
        email: "maxinomemolesten@gmail.com",
        message: "mensaje de prueba"
    }

    res.render('index', testEmail);
})

app.listen(PORT, () => {
    console.log(`Server is started on ${PORT}...`);
})