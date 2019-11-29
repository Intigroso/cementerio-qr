
var express = require("express");
var login = require ('./routes/loginroutes');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
var router = express.Router();

// test route
router.get('/', function(req, res) {
    res,json({ message: 'welcome'});
});


app.get('/usuario',login.usuario)
app.get('/usuarioxid/:id',login.usuarioxid)
app.get('/personas',login.personas)
app.get('/personasstandby',login.personasstandby)
app.get('/favoritos/:idusuario',login.favoritos)
app.post('/personasstanby_insert/:id',login.personasstanby_insert)
app.post('/favoritos_insert/:idusuario/:idfallecido',login.favoritos_insert)
/*

router.post('/register', function(req,res){
	Controller.Create
});
router.post('/usuarios', function(req,res){
	Controller.Create
});
router.post('/personasstandby', function(req,res){
 	Controller.Create
});
router.post('/personas', function(req,res){
	Controller.Create
});
router.post('/usuario', function(req,res){
	Controller.Create
});


*/
//router.post('/login', login.login)

//app.post('/user/all', function(req, res){
 // Controller.Create
// });

app.use('/api', router);
app.listen(5000);