const express = require('express');
const router = express.Router();
const User = require('../models/user');


// routes
router.post('/createUser', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const name = req.body.password;
    const emailAddress = req.body.emailAddress;
    const homeAddress = req.body.homeAddress;

    const user = new User({
        username,
        password,
        name,
        emailAddress,
        homeAddress
    });

    if (username && password) {
        user.save((err, user) => { 
            if (err) return console.log(err);
            console.log(user);
            res.send("User was created!");
        });
    } else {
        res.send("Username and password are required!").status(404);
    }
});


router.get('/getUser/:username', async (req, res) => {
    const username = req.params.username;
    const user = await User.findOne({username: username});
    res.send(user);
});


module.exports = router;


