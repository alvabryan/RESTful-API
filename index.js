var express = require('express');
var app = express();
var PORT = 3000;

var cors = require('cors');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
const config = require('./config/database');

// routes import
var profileManagement = require('./routes/profileManagement');

// middleware
app.use(cors());
app.use(bodyParser.urlencoded());
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

// app listener
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`);
});

