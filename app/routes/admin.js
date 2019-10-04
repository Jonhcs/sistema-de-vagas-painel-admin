const express = require('express')
const router = express.Router()
const administrador = require('./../controller/admin/index')

router.get('/', administrador.index)
router.get('/new', administrador.new)
router.post('/', administrador.create)
router.get('/:id', administrador.show)
router.delete('/:id', administrador.remove)

module.exports = router