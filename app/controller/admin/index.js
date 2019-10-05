const Administrador = require('./../../models/administrador')
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
    new(req, res) {
        return res.render('admin/new', {
            administrador: new Administrador()
        })
    },
    /*
    create(req, res) {
        Administrador
            .create(req.body)
            .then((admin) => {
                return res.redirect('/admin')
            })
            .catch((erro) => {
                console.log(erro)
                return
            })
    },
    */
    remove(req, res) {
        Aluno
            .findByIdAndRemove(req.params.id)
            .then( () => res.redirect('/admin'))
            .catch(error => console.log('algo errado'))

    },
    show(req, res) {
        Aluno
            .findById(req.params.id)
            .then( (aluno) => {
                return res.render('admin/show', {
                    title: "Dados de contato com o Dev",
                    aluno: aluno
                })
            })
            .catch( (error) => {
                console.log('algo errado' + error)
            })       
    },
    
}