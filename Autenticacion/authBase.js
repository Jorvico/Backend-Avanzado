const express = require('express')
const basicAuth = require('basic-auth')
const morgan = require('morgan')

const PORT = 3001

const app = express()

//Middleware para recibi la informacion de las solicitudes
app.use(morgan('dev'))


const auth = (req, res, next) =>{
    const user = basicAuth(req)

    if(!user || user.name !== 'usuario' || user.pass !== 'contrasena'){
        res.set('WWW-Authenticate', 'Basic realm="example"')
        return res.status(401).send("Autenticacion denegada")
    }
    next();
}

//Ruta privada con autenticacion basica
app.get('/recurso-protegido', auth, (req, res) =>{
    res.send("El mensaje esta protegido por la ley")
})

app.get('/', (req, res) => {
    res.send("Hola mundo esta en una ruta publica")
})

app.listen(PORT, ()=>{
    console.log(`El servidor esta corriendo en el puerto ${PORT}`)
})