const mongoose = require('mongoose');


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

module.exports = mongoose.model('User', Userschema);

