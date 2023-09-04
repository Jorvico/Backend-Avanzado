//Importar mongoose
const mongoose = require('mongoose')

//Definir la estructura del documento que se va a crear
const authorSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    nationality: {
        type: String,
    },
    birthdate:{
        type: Date,
    }
})

const Author = mongoose.model('Author', authorSchema)
module.exports = Author