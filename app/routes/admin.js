const express = require('express')
const router = express.Router()
const administrador = require('./../controller/admin/index')

module.exports = (passport) => {

    router.get('/', administrador.index)
    router.get('/new', administrador.new)
    router.post('/', passport.authenticate('local-signup', {
        successRedirect: '/admin',
        failureRedirect: '/'
    }))
    //router.post('/', administrador.create)
    router.get('/:id', administrador.show)
    router.delete('/:id', administrador.remove)

    return router
}