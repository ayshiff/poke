var express = require('express');

var router = express.Router();

var Type = require('./../models/Type');

router.get('/:type', function(req, res){
    Type.findOne({name: req.params.type}).populate('pokemons').then(type => {
        res.render('types/index.html', {
            type: type,
            pokemons: type.pokemons
        })
    })
})

module.exports = router;