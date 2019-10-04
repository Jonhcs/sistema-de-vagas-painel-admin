const express = require('express')
const router = express.Router()
const administrador = require('./../controller/admin/index')

router.get('/', administrador.index)
router.delete('/:id', administrador.remove)

module.exports = router