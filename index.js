//index.js
// Import express
var express = require('express');
// Import Body parser
var bodyParser = require('body-parser');
// Import Mongoose
var mongoose = require('mongoose');
// Initialise the app
var app = express();

var PORT = 3000;
var cors = require('cors');

const config = require('./config/database');

// routes import
var profileManagement = require('./routes/profileManagement');
let bookRoutes = require("./routes/bookBrowsing");
var wishList = require("./routes/wishList");

// middleware
app.use(cors());

// Configure bodyparser
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

// db connection
mongoose.connect(config.database, { useNewUrlParser: true });

mongoose.connection.on('connected',()=>{
    console.log(`connected to database ${config.database}`);
});

mongoose.connection.on('error',(error)=>{
    console.log(`Database error ${error}`);
});

// routes
app.use('/profileManagement', profileManagement);
app.use('/browsing', bookRoutes);
app.use('/wishList', wishList);

// app listener
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`);
});

