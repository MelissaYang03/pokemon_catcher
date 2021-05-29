const mongoose = require('mongoose');

const myPokemonSchema = {
    nickname: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    }
}

module.exports = MyPokemon = mongoose.model('MyPokemon', myPokemonSchema);