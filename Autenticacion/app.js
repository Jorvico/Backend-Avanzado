const express = require('express')
const morgan = require('morgan')

const app = express()
const PORT = 3000

//Middleware para procesar solicitudes JSON
app.use(express.json())

//Middleware para recibi la informacion de las solicitudes
app.use(morgan('dev'))

app.use((req, res, next) =>{
    console.log(`Recibida una solicitud a ${req.url}`)
    next();
})

app.get('/', (req, res) =>{
    res.send('!Hola esta es una aplicacon web')
})

app.listen(PORT, ()=>{
    console.log(`El servidor esta corriendo en el puerto ${PORT}`)
})