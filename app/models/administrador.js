const mongoose = require('mongoose')

const Administrador = new mongoose.Schema ({
    name: {
        type: String,
    },
    username: {
        type: String,
    },
    password: {
        type: String,
    }
})

module.exports = mongoose.model('Administrador', Administrador)