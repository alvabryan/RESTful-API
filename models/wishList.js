const mongoose = require("mongoose");
// const book = require("../models/book");

const wishListSchema = mongoose.Schema({
        name: {type: String},
        userId: {type: String},
        books: []
});

module.exports = mongoose.model('WishList', wishListSchema);