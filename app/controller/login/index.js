module.exports = {
    index(req, res ) {
        res.render('login/index', {
            title:'Freelancer with Danilo',
            
        });
    },
    logout(req, res) {
        req.logout()
        return res.redirect('/login')
    }
}