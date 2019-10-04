const express = require('express')
const router = express.Router()
const homeMain = require('./../controller/homeSite/index')

router.get('/', homeMain)

module.exports = router