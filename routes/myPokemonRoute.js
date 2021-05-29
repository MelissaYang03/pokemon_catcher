const express = require('express');
const router = express.Router();
const MyPokemon = require('../models/myPokemonModel');

// @route GET api/mypokemons
// Get All pokemon list
router.get('/api/mypokemons', (req, res) => {
    MyPokemon.find()
        .then(pokemons => res.json(pokemons))
});

// @route GET api/mypokemon/:nickname
// Check if a nickname exist
router.get('/api/mypokemon/check/:nickname', (req, res) => {
    MyPokemon.findOne({ nickname: req.params.nickname }).lean()
             .then(pokemon => {
                if(pokemon != null)
                    res.json({exist: true});
                else
                    res.json({exist: false});
            });
    // MyPokemon.findOne({ nickname: req.params.nickname }).lean()
    //          .then(pokemon => res.json(pokemon));
});

// @route POST api/mypokemon/add
// Create mypokemon
router.route('/api/mypokemon/add')
    .post((req, res) => {
        const nickname = req.body.nickname;
        const name = req.body.name;
        const newMyPokemon = new MyPokemon({
            nickname,
            name
        });

        newMyPokemon.save();
    });

// @route DELETE api/mypokemon/release/:nickname
// release a pokemon
router.delete('/api/mypokemon/release/:nickname', (req, res) => {
    MyPokemon.deleteOne({ nickname: req.params.nickname })
             .then(suc => res.json({ success: true }))
             .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;