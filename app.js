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

// Connection à la base de donnée

=======
// Connection à la base de donnée
mongoose.connect('mongodb://localhost/local');
>>>>>>> 50f2821a18548561e59f228f8ffbae9d4788ab7c

// require des modèles
require('./models/Poke');
require('./models/Type');

var app = express();

app.use(bodyParser.urlencoded());
app.use(upload.single('file'));

app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));

app.use('/', require('./routes/pokemon'));
app.use('/type', require('./routes/types'));

app.use('/uploads', express.static(__dirname + '/uploads'));

// configuration du moteur de template
nunjucks.configure('views', {
    autoescape: true,
    express: app
});


app.listen(8000);
