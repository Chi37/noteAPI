var ObjectID = require('mongodb').ObjectId
var path = require('path')

module.exports = function (app, db) {
    app.get('/', (req,res) => {
        res.sendFile(path.resolve(__dirname, '../views/index.html'));
    }) 


    app.get('/notes/:id', (req, res) => {
        const id = req.params.id
        const details = { '_id': new ObjectID(id) };
        db.db().collection('notes').findOne(details, (err, item) => {
            if (err) {
                res.send({ 'error': 'An error occured' });
            } else {
                res.send(item)
            }

        });
    });
    app.post('/notes', (req, res) => {
        const note = { text: req.body.body, title: req.body.title, date: req.body.date }; //json obj
        db.db().collection('notes').insert(note, (err, results) => {
            if (err) {
                res.send({ 'error': 'An error has occured' });
            } else {
                res.send(results.ops[0]); //newly create object
            }
        });
    });

    app.delete('/notes/:id', (req, res) => {
        const id = req.params.id; //123
        db.db().collection('notes').deleteOne({'_id':new ObjectID(id)}, (err, item) => {
            if (err) {
                res.send({ 'error': 'An error occured' });
            } else {
                res.send({ 'success': 'sent', 'item': item });
            }
        });
    })

}

