//user.js
const mongoose = require('mongoose');

//setup schema
const Userschema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    name: {
        type: String
    },
    emailAddress: {
        type: String
    },
    homeAddress: {
        type: String
    }
});

//export model
module.exports = mongoose.model('User', Userschema);



