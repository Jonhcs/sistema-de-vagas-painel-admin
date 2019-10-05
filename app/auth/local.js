const LocalStrategy = require('passport-local').Strategy
const Administrador = require('./../models/administrador')

module.exports = (passport) => {

    passport.serializeUser((administrador, cb) => {
        return cb(null, administrador._id)
    })

    passport.deserializeUser((id, cb) => {
        Administrador
            .findById(id)
            .then(administrador => cb(null, administrador))
            .catch(err => cb(err, {}))
    })

    passport.use('local-signup', new LocalStrategy({
        usernameField: 'username',
        passwordField: 'password',
        passReqToCallback: true
    }, 
    function(req, username, password, cb) {
        Administrador
            .findOne({ username: username })
            .then((userExists) => {
                if (!userExists) {
                        administrador = new Administrador(req.body)

                        return administrador
                                            .save()
                                            .then((admin) => {
                                                return cb(null, admin)
                                            })
                                            .catch((error) => {
                                                console.log( error)
                                                return

                                            })               
                }

                return cb(null, false)
            })
            .catch((err) => {
                return cb(err, false)
            })
    }
    
    ))

    passport.use('local-signip', new LocalStrategy({
        usernameField: 'username',
        passwordField: 'password',
        passReqToCallback: true
    },
    function(req, username, password, cb){
        Administrador
                    .findOne({ username: username, password: password })
                    .then((user) => {
                        if (!user) {
                            return cb(null, false)
                        }
                        return cb(null, user)
                    })
    }
    
    ))
}
