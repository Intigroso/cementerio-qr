const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const connection = mysql.createPool({
    host : 'localhost',
    user : 'root',
    password : 'cementerioqr',
    database : 'reactdb'
});

const app = express();

app.get('/', function(req, res) {
   res.send('Hola'); 
});

app.get('/personas', function (req, res) {
    connection.getConnection(function (err, connection) {
        if (err) throw err;
        connection.query('select * from personas', function (error, results, fields) {
            if (error) throw error;
            res.send(results)
        });
    });
});

app.listen(3000, () => {
    console.log('Listening on port 3000....');
});
