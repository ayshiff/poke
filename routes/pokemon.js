var express = require('express');

var Poke = require('./../models/Poke');

var Type = require('./../models/Type');

var router = express.Router();

router.get('/', function(req, res){
    Poke.find({}).populate('types').then(pokemons => {
        res.render('pokes/index.html', {pokemons: pokemons});
    });
});

router.get('/new', function(req, res){
    // récupère toutes les données de la base
    Type.find({}).then(types => {
            var pokemon = new Poke();
    res.render('pokes/edit.html', {pokemon: pokemon, types: types, endpoint: '/'});
    })
});

router.get('/edit/:id', function(req, res){
    Type.find({}).then(types => {
        // Populate nous permet de tranformer un tableau d'object id en tableau avec les types que l'on veut récupérer
       Poke.findById(req.params.id).then(pokemon => {
        res.render('pokes/edit.html', {pokemon: pokemon, types: types, endpoint: '/' + pokemon.id.toString()} )
    }) 
    })  
});


router.get('/:id', function(req,res){
    Poke.findById(req.params.id).populate('types').then(function(pokemon){
        res.render('pokes/show.html', {pokemon: pokemon} )
    },
    function(err){
        res.status(500).send(err)
    });
})

router.post('/:id?', (req, res) => {
    new Promise((resolve, reject) =>{
        if(req.params.id){
            Poke.findById(req.params.id).then(resolve, reject);
        }else {
            resolve (new Poke());
        }
    }).then(pokemon => {
        pokemon.name = req.body.name;
        pokemon.description = req.body.description;
        pokemon.number = req.body.number;
        pokemon.types = req.body.types;

        if(req.file) pokemon.picture = request.file.filename;

        return pokemon.save();    
    }).then(() => {
        res.redirect('/');
    }, err => console.log(err))
});


module.exports = router;