module.exports = (app) => {
    app.use('/', require('./routes/home'))
    app.use('/cadastro', require('./routes/cadastro'))
    app.use('/admin', require('./routes/admin'))

}