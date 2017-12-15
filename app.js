var express = require ('express');
var mongoose = require('mongoose');
var nunjucks = require('nunjucks');
var bodyParser =require('body-parser');
var multer = require('multer');

var upload = multer({
    dest: __dirname + '/uploads'
});

<<<<<<< HEAD
mongoose.connect('mongodb://localhost/local');
=======
// Connection à la base de donnée
mongoose.connect('mongodb://localhost/openclassroom');
>>>>>>> 0ce43a9ac510e45fc1cca7cf79eb5d3a5508e6a0

// require des modèles
require('./models/Poke');
require('./models/Type');

var app = express();

app.use(bodyParser.urlencoded());
app.use(upload.single('file'));

app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));

app.use('/', require('./routes/pokemon'));
app.use('/types', require('./routes/types'));

app.use('/uploads', express.static(__dirname + '/uploads'));

// configuration du moteur de template
nunjucks.configure('views', {
    autoescape: true,
    express: app
});


app.listen(8000);