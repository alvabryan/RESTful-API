const mongoose = require("mongoose")
const book = require("../models/bookModel")

const Shoppingschema = mongoose.Schema({
        userId:{
            type: String,
            required: true
        },
        books: []
            
});

module.exports = mongoose.model('Cart', Shoppingschema);