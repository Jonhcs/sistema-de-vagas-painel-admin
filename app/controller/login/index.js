module.exports = {
    index(req, res ) {
        res.render('login/index');
    },
    logout(req, res) {
        req.logout()
        return res.redirect('/login')
    }
}