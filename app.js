const express = require('express');
const mysql = require('mysql');

const app = express();

app.get('/', (req, res) => {
    const connection = mysql.createConnection({
        host: 'localhost',
        user: '',
        password: '',
        database: '',
    });
    connection.connect();

    connection.query('SELECT * FROM books', (error, results, fields) => {
        if (error) throw error;
        console.log(results, fields);
    });

    connection.end();
});

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});
