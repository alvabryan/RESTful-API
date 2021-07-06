var express = require('express');
var app = express();
var PORT = 3000;


app.get('/', (req, res) => {
    console.log('Server Reache');
});


app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`);
});

