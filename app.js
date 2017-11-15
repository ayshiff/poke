var express = require ('express');
var mongoose = require('mongoose');
var nunjucks = require('nunjucks');

mongoose.connect('mongodb://localhost/openclassroom');

require('./models/Poke');
require('./models/Type');

var app = express();

app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));

app.use('/', require('./routes/pokemon'));
app.use('/types', require('./routes/types'));

nunjucks.configure('views', {
    autoescape: true,
    express: app
});


app.listen(8000);