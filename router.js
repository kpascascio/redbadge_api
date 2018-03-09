module.exports = app => {
    app.use('/api/user', require('./controllers/userscontroller'));
    app.use('/api/accounts', require('./controllers/accountcontroller'));
    // Test page
    app.get('/', (req, res, next) => {
        res.sendFile(__dirname + '/index.html')
    })
}