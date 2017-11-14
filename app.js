var express = require ('express');
var mongoose = require('mongoose');
var nunjucks = require('nunjucks');

mongoose.connect('mongodb://localhost/openclassroom');

var app = express();

app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));

nunjucks.configure('views', {
    autoescape: true,
    express: app
});


app.listen(8000);