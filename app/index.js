module.exports = (app, passport) => {
    app.use('/', require('./routes/home'))
    app.use('/cadastro', require('./routes/cadastro'))
    app.use('/admin', require('./routes/admin')(passport))

}