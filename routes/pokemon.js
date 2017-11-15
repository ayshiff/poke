var express = require('express');

var Poke = require('./../models/Poke');

var router = express.Router();

router.get('/', function(req, res){
    Poke.find({}).populate('types').then(pokemons => {
        res.render('pokes/index.html', {pokemons: pokemons});
    });
});

module.exports = router;