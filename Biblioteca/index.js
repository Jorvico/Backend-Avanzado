const express = require('express')
const mongoose = require('mongoose') 
const app = express()
const routes = require('./Server/Routes/router')
const authMiddleware = require('./Server/Controllers/auth')

require('dotenv').config()

const PORT = 3000
app.use(express.json())
app.use('/api', authMiddleware)
app.use('/api', routes)


//Conexion a mongo
const mongoConnect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log('Conexion realizada exitosamente con MongoDb')
    } catch (err) {
        
    }
}
mongoConnect()
app.listen(PORT, () =>{
    console.log(`El servidor esta en ejecucion en localhost:${PORT}`)
})