

const noteRoutes = require('./note_routes');

module.exports = function(app,db){
    noteRoutes(app,db); //index.js is the master route file . Exporting note_routes. 
}
