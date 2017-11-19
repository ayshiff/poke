var express = require('express');

var Poke = require('./../models/Poke');

var router = express.Router();

router.get('/', function(req, res){
    Poke.find({}).populate('types').then(pokemons => {
        res.render('pokes/index.html', {pokemons: pokemons});
    });
});

router.get('/:id', function(req,res){
    Poke.findById(req.params.id).populate('types').then(function(pokemon){
        res.render('pokes/show.html', {pokemon: pokemon} )
    },
    function(err){
        res.status(500).send(err)
    });
})

module.exports = router;