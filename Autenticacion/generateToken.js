//Se importa express
const express = require('express')
//Se importa json web token
const jwt = require('jsonwebtoken')

//Se crea una instancia de express
const app = express()

//Se configura el puerto en donde va a correr la aplicacion
const PORT = 3002

//Clave secreta para el JWT
const secretKey = 'default_secret_key'

app.get('/api/token', (req, res) => {
    // contiene los datos que se desean transmitir en el token, como información del usuario
    const payload = {
        userId: 12345,
        username: 'usuarioEjemplo'
      };

    // Generar el token JWT 
    const token = jwt.sign(payload, secretKey, {expiresIn: '1h'})

    // Devolver el token al cliente
    res.json({ token });

})

app.get('/api/data', verifyToken, (req, res)=> {
    const data = {mensaje: "Estos datos son protegidos"}
    res.send(data)
})

function verifyToken(req, res ,next){
    const autHeader = req.headers['authorization']
    if(!autHeader){
        return res.status(404).json({error: "Token no existe"})
    }

    const token = autHeader.split(' ')[1]
    if(!token){
        return res.status(404).json({error: "Token no esta proporcionado"})
    }

    jwt.verify(token, secretKey, (err, decode) =>{
        if(err){
            return res.status(401).json({error: "Token invalido"})
        }
        req.user = decode
        next()
    })
}

app.listen(PORT, ()=>{
    console.log(`El servidor esta corriendo en el puerto ${PORT}`)
})