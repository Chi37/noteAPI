const express = require('express'); //built in node function. bringing in library
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const app = express(); //declaring the libary
const port = 8000;

require('./app/routes')(app, {}); //since there isnt a database at first, {} is empty
app.listen(port, () => {
    console.log("We are live on " + port);
})



