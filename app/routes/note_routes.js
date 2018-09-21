module.exports = function(app,db){
    app.post('/notes', (req,res) => {
        //We'll create note here
        res.send('Hello, this is a post')//callback, in callback will pass in req object contains json of objc and a response used to reply
    })

}