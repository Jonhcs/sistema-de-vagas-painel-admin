const express = require('express')
const router = express.Router()
const login = require('./../controller/login/index')

module.exports = (passport) => {
    router.get('/', login.index)
    router.post('/auth', passport.authenticate('local-signip', {
        successRedirect: '/admin',
        failureRedirect: '/login',
    }))
    router.get('/logout', login.logout)

    return router
}

