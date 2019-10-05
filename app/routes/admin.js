const express = require('express')
const router = express.Router()
const administrador = require('./../controller/admin/index')
const verifica = require('./../auth/middleware')

module.exports = (passport) => {  
    router.get('/', verifica,administrador.index)
    router.get('/new', verifica, administrador.new)
    router.post('/',verifica, passport.authenticate('local-signup', {
        successRedirect: '/admin',
        failureRedirect: '/cadastro/new',
    }))
    //router.post('/', administrador.create)
    router.get('/:id', verifica, administrador.show)
    router.delete('/:id',verifica, administrador.remove)

    return router
}