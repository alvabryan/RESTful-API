// bookModel.js
var mongoose = require('mongoose');

// Schema
var bookSchema = mongoose.Schema({
    ISBN: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
    publisher: {
        type: String,
        required: true
    },
    year_published: {
        type: Date,
        required: true
    },
    copies_sold: {
        type: Number,
        required: true
    },
    rating: {
        type: Number,
        required: true
    }
});

// Export model
var Book = module.exports = mongoose.model('book', bookSchema);

module.exports.get = function (callback, limit) {
    Book.find(callback).limit(limit);
}
