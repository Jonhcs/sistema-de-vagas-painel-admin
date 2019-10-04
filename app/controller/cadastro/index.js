const Aluno = require('./../../models/aluno')

module.exports = {
    index(req, res) {
        res.render('cadastro/index')
    },
    new(req, res) {
        return res.render('cadastro/aluno', {
            aluno: new Aluno()
        })
    },
    create(req, res) {
        Aluno
            .create(req.body)
            .then((alunoCadastrado) => {
                console.log(alunoCadastrado)
                return res.redirect('/')
            })
            .catch((erro) => {
                console.log(erro)
                return
            })
    }
}