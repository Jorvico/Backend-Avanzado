

// Sin utilizar mongo, solo usando el arrary
let books = [];


// exports.getAllBooks = (req, res) => {
//     res.json(books)
// }

// exports.createBooks = async (req, res) => {
//     const {title, author} = req.body
//     const newBook = {title, author}
//     books.push(newBook)
//     res.status(201).json(newBook)
// }

// exports.deleteBook = (req, res) => {
//     const {id} = req.params
//     //El metodo filter crea un nuevo array sin tener en cuenta el id especificado
//     books = books.filter((book, index) => index != id)
//     res.status(204).send()
// }

//Usando mongo
const Book = require('../Models/bookModel')

exports.getAllBooks = async(req, res) => {
    const books = await Book.find()
    return res.status(200).json(books)
}

exports.getOneBook = async(req, res) =>{
    const {id} = req.params
    const book = await Book.findById(id)
    return res.status(200).json(book)
}

exports.createBooks = async (req, res) => {
    const newBook = new Book({...req.body})
    const insertedBook = await newBook.save()
    return res.status(201).json(insertedBook)
}

exports.updateBook = async (req, res) => {
    const {id} = req.params;
    await Book.updateOne({_id: id}, {...req.body})
    const updatedBook = await Book.findById(id)
    return res.status(201).json(updatedBook)
}

exports.deleteBook = async (req, res) => {
    const {id} = req.params
    const bookToDelete = await Book.findByIdAndDelete(id)
    res.status(204).json(bookToDelete)
}
