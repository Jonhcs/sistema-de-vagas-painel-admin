module.exports = (app, passport) => {
    app.use('/admin', require('./routes/admin')(passport))
    app.use('/login', require('./routes/login')(passport))
}