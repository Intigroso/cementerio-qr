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


    exports.personasstandby =  function(req, res){
        connection.query('SELECT * FROM personasstandby', function (error, results, fields) {
         if (error) throw error;
         res.send(results);
    });
  };
  exports.personas = function(req, res){
     connection.query('SELECT * FROM personas', function (error, results, fields) {
         if (error) throw error;
         res.send(results);
  });
  };
      exports.usuario =  function(req, res){
        connection.query('SELECT * FROM usuario', function (error, results, fields) {
         if (error) throw error;
         res.send(results);
    });
  };

  exports.usuarioxid =  function(req, res){
        let user_id = req.params.id;
        connection.query('SELECT * FROM usuario WHERE id=?', user_id, function (error, results, fields) {
         if (error) throw error;
         res.send(results);
    });
  };

  exports.personasstanby_insert =  function(req, res){
        let user_id = req.params.id;
        connection.query('INSERT INTO PERSONAS (nombre, segundo_nombre,apellido,biografia) select nombre, segundo_nombre, apellido , biografia from personasstandby where ID=?', user_id, function (error, results, fields) {
         if (error) throw error;
        connection.query('DELETE FROM personasstandby where ID=?', user_id, function (error, results, fields) {
        res.send(results);
         
    });
  });
};

  exports.favoritos = function(req, res){
        let user_id = req.params.id;
        connection.query('SELECT idfallecido FROM FAVORITOS WHERE idusuario=?', user_id, function (error, results, fields) {
         if (error) throw error;
         res.send(results);
  });
  };
  exports.favoritos_insert = function(req, res){
      let user_id = req.params.idusuario 
      let id_fallecido = req.params.idfallecido

      connection.query('INSERT INTO FAVORITOS (idusuario, idfallecido) VALUES (?,?) ', [user_id, id_fallecido], function (error, results, fields) {
      if (error) throw error;
      res.send(results);
  });
};

    

