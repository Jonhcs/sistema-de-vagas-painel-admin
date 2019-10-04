const express = require('express')
const router = express.Router()
const cadastroAluno = require('./../controller/cadastro/index')

router.get('/', cadastroAluno.index)
router.get('/new', cadastroAluno.new)
router.post('/', cadastroAluno.create)

module.exports = router