const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    publishedYear: { type: Number, required: true },
    genre: { type: String, required: true },
    rating: { type: Number, min: 0, max: 5 , default: 0 }
});


module.exports = mongoose.model('Book', bookSchema); 