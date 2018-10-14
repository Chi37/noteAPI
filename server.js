const express = require('express'); //built in node function. bringing in library
const bodyParser = require('body-parser');
const db = require('./config/db');
const MongoClient = require('mongodb').MongoClient;
const app = express(); //declaring the libary
const port = 8000;
app.use(bodyParser.urlencoded( {extended: true}));

MongoClient.connect(db.url, (err, database) => {
    if(err) return console.log(err);
    require('./app/routes')(app, database);
    app.listen(port, () => {
        console.log("We are live on " + port);
    })
})

