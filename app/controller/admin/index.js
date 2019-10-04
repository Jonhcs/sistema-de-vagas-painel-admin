const Aluno = require('./../../models/aluno')

module.exports = {
    index(req, res) {
        Aluno
            .find({})
            .then((alunos) => {
                return res.render('admin/index', {
                    alunos
                })
            })
            .catch((error) => {
                console.log(error)
            })
    },
    remove(req, res) {
        Aluno
            .findByIdAndRemove(req.params.id)
            .then( () => res.redirect('/'))
            .catch(error => console.log('algo errado'))

    },
}