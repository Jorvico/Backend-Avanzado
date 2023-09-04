//Importar mongoose
const mongoose = require('mongoose')

//Definir la estructura del documento que se va a crear
const bookSchema = mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    author: {
        type: String,
    },
    publish_date:{
        type: Date
    }
})

const Book = mongoose.model('Book', bookSchema)
module.exports = Book