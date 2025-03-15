const express = require('express');
const app = express();
const port = 3000 || process.env.PORT;
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
});

connection.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL Server!');
});

app.get('/', (req, res) => {
    res.send({ status: "Healthy!"});
})

app.listen(port, () => {
    console.log(`${process.env.APP_NAME} listening at http://localhost:${port}`)
})