var mysql = require('mysql');

var connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'bianca02',
    database: 'cementerioqr'
 });

connection.connect(function (err) {
    if (!err) {
       console.log("Database is connected ...");
    } else {
        console.log("Error connecting database...");
    }
 });

exports.register = function (req, res) {
    var today = new Date();
    var users = {
        "nombre_usuario": req.body.nombreUS,
        "mail": req.body.mail,
        "password": req.body.passw,
       "creado": today,
       "modificado": today
   }
     connection.query('INSERT INTO usuario SET ?', users, function (error, results, fields) {
        if (error) {
            console.log("Ocurrio un error", error);
            res.send({
                "code": 400,
                "failed": "Ocurrio un error"
            })
        } else {
            console.log('The solution is: ', results);
            res.send({
                "code": 200,
                "success": "user registered sucessfully"
            });
        }


exports.registrarFallecido = function (req, res) {
    var today = new Date();
    var users = {
        "nombre": req.body.nombre,
        "apellido": req.body.apellido,
        "bio": req.body.biografia,
        "creado": today,
        "modificado": today
    }
    connection.query('INSERT INTO personasstandby SET ?', users, function (error, results, fields) {
        if (error) {
            console.log("Ocurrio un error", error);
            res.send({
                "code": 400,
                "failed": "Ocurrio un error"
            })
        } else {
            console.log('The solution is: ', results);
            res.send({
                "code": 200,
                "success": "user registered sucessfully"
            });
        }
    });
     app.get('/personasstandby', function(req, res){
            connection.getConnection(function (err, connection){
                connection.query('SELECT * FROM personasstandby', function (error, results, fields) {
                 if (error) throw error;
                 res.send(results);
    });
  });
 }); 
     app.get('/personas', function(req, res){
            connection.getConnection(function (err, connection){
                connection.query('SELECT * FROM personas', function (error, results, fields) {
                 if (error) throw error;
                 res.send(results);
    });
  });
 });
     app.get('/usuario', function(req, res){
            connection.getConnection(function (err, connection){
                connection.query('SELECT * FROM usuario', function (error, results, fields) {
                 if (error) throw error;
                 res.send(results);
       });
  });
});

    app.post('/personas', function (req, res) {
    var ID = req.body.id;
    var nombre = req.body.Nombre;
    var segundoNombre = req.body.segundo_nombre;
    var apellido = req.body.apellido;
    var bio = req.body.biografia;
    personas(ID, nombre, segundoNombre, apellido, bio, res);
 });

app.post('/personasstandby', function (req, res) {
    var ID = req.body.id;
    var Nombre = req.body.nombre;
    var Apellido = req.body.apellido;
    var biografia = req.body.bio;
    personasstandby(ID, Nombre, Apellido, biografia, res);
 }); 
app.post('/usuario', function (req, res) {
    var ID = req.body.id;
    var Nombre = req.body.nombreUS;
    var Mail = req.body.mail;
    var password = req.body.passw;
    usuario(Nombre, Apellido, biografia, ID, res);
});
};
});
};     

