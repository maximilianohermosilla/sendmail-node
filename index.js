const express = require('express');
const cors = require("cors");
const PORT = process.env.PORT || 5000;

require("dotenv").config();

const app = express();

app.use(express.json());

app.use(cors({
    origin: ['http://localhost:5000'],
    credentials: true,
}));

app.use("/api", require("./routes/email"));

// app.get('/inicio', (req, res) => {
//     res.send("Hola mundo!");
// })

app.listen(PORT, () => {
    console.log(`Server is started on ${PORT}...`);
})