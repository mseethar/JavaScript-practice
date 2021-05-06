const Joi = require('joi');
const validationSchemaGenre = Joi.object({
    name: Joi.string().allow('Drama', 'Horror', 'Thriller', 'Romance', 'Comedy').required()
});
const mongoose = require('mongoose');
const genresSchema = mongoose.Schema({
    name: {
        type: String,
        //enum: [ 'Drama', 'Horror', 'Thriller', 'Romance', 'Comedy' ],
        required: true
    }
});

const Genre = mongoose.model('Genre', genresSchema);

function validateGenre(genre) {
    return validationSchemaGenre.validate(genre);
}

module.exports.Genre = Genre;
module.exports.validate = validateGenre