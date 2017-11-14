var mongooser = require ('mongoose');

var pokemonSchema = new mongooser.Schema({
    name: String,
    number: Number,
    secription: String,
    picture: String,
    types: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'Type'
        }
    ]
});

var Pokemon = mongoose.model('Pokemon', pokemonSchema);

module.exports = Pokemon;