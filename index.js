const mysql = require('mysql');

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: 'database1'
});

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM personas", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });

  con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM usuarios", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});