const mysql = require('mysql');

var jsdom = require("jsdom");
const { JSDOM } = jsdom;
const { window } = new JSDOM();
const { document } = (new JSDOM('')).window;
global.document = document;

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '47cromosomas',
    database:'proyecto_final',
    port: 3306
 });
 
 connection.connect(function(error){
    if(error)
       throw error;
    else
       console.log('>> mysql.connection on port 3306');      
 });

 module.exports = connection;