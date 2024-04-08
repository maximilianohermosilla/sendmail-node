import express from 'express';
import cors from 'cors';
import handlebars from 'express-handlebars';
import router from './routes/email.js';
import sendEmail from './controllers/email.js';
import __dirname from './utils.js'
import dotenv from 'dotenv';
import {Server} from 'socket.io'

const PORT = process.env.PORT || 5000;

const app = express();

const httpServer = app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));
const socketServer = new Server(httpServer);
app.use(express.json());

app.engine('handlebars', handlebars.engine());
app.set('views',__dirname+'/views');
app.set('view engine', 'handlebars');
app.use(express.static(__dirname+'/public'));


app.use(cors({
    origin: ['http://localhost:5000'],
    credentials: true,
}));

dotenv.config();
//app.use("/api", require("./routes/email"));
app.use("/api", router);

app.get('/', (req, res) => {
    let testEmail = {
        email: "maxinomemolesten@gmail.com",
        message: "mensaje de prueba"
    }

    res.render('index', {
        testEmail: testEmail,
        style: "index.css"
    });
})

// app.listen(PORT, () => {
//     console.log(`Server is started on ${PORT}...`);
// })

socketServer.on('connection', socket => {
    console.log("Nuevo cliente conectado");

    socket.on('send', async data => {
        console.log(data);
        let response;
        let result = await sendEmail(JSON.parse(data), response);
        console.log(result)
    })
})