const { Genre, validate } = require('../models/genres');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
router.get('/', (req, res) => {  // The anonymous function might have tagged as async
    console.log(req.body);
    Genre.find()
        .select('_id name')
        .then((result) => {
            res.send({ items: result.map((v) => { return { id: v._id, name: v.name } }) });  // Removed _id property
        })
        .catch( (err) => {
            res.send(err);
        });
});

router.get('/:id', async (req, res) => {
    console.log('Get genre with id', req.params.id);
    const genre = await Genre.findById(mongoose.Types.ObjectId(req.params.id));
    if (genre) res.send(genre);
    else res.status(404).send({ error: `Genre with id ${req.params.id} not found!`})
});

router.post('/', async (req, res) => {
    const genre = req.body;
    //genre._id = mongoose.Types.ObjectId();
    const validationResult = validate(genre);
    if (validationResult.error) {
        const errors = [];
        validationResult.error.details.forEach( (detail) => {
            errors.push(detail.message);
        });
        res.status(400).send({ errors: errors });
        return;
    };
    const genreDB = await Genre.create(genre);
    res.status(201).send(genreDB);
});

router.put('/', async (req, res) => {
    const genre = req.body;
    const id = genre._id;
    delete genre._id;
    const validationResult = validate(genre);
    if (validationResult.error) {
        const errors = [];
        validationResult.error.details.forEach( (detail) => {
            errors.push(detail.message);
        });
        res.status(400).send( { errors: errors } );
        // return;
    } else {
        const genreDB = await Genre.findByIdAndUpdate(id, genre, { new: true });
        res.status(200).send(genreDB);
    }
});

router.delete('/:id', async (req, res) => {
    const id = req.params.id;
    const genre = await Genre.findByIdAndDelete(id);
    if(genre) res.send(genre);
    else res.status(404).send( { error: `Genre with id ${id} not found!` } );
});

// TODO: Implement post, put and delete

module.exports = router;

async function initGenres() {
    await new Genre({ name: 'Comedy'}).save();
    await new Genre({ name: 'Romance'}).save();
    await new Genre({ name: 'Thriller'}).save();
    await new Genre({ name: 'Horror'}).save();
    await new Genre({ name: 'Drama'}).save();
}

//initGenres();