const basicAuth = require('basic-auth')


const authMiddleware = (req, res, next) =>{
    const user = basicAuth(req)

    if(!user || user.name !== 'usuario' || user.pass !== 'contrasena'){
        res.set('WWW-Authenticate', 'Basic realm="example"')
        return res.status(401).send("Autenticacion denegada")
    }
    next();
}

module.exports = authMiddleware