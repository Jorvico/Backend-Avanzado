let authors = []

//Usando mongo
const Author = require('../Models/authorModel')

exports.getAllAuthors = async (req, res) => {
    const Authors = await Author.find()
    return res.status(200).json(Authors)
}

exports.getOneAuthor = async (req, res) => {
    const {id} = req.params
    const author = await Author.findById(id)
    return res.status(200).json(author)
}

exports.getAuthorByName = async (req, res) => {
    const {name} = req.params
    const author = await Author.findOne({name: name})
    return res.status(200).json(author)
}

exports.createAuthor = async (req, res) => {
    const newAuthor = new Author({...req.body})
    const insertedAuthor = await newAuthor.save()
    return res.status(201).json(insertedAuthor)
}

exports.updateAuthor = async (req, res) => {
    const {id} = req.params;
    await Author.updateOne({_id: id}, {...req.body})
    const updatedAuthor = await Author.findById(id)
    return res.status(201).json(updatedAuthor)
}

exports.deleteAuthor = async (req, res) => {
    const {id} = req.params
    const AuthorToDelete = await Author.findByIdAndDelete(id)
    res.status(204).json(AuthorToDelete) 
}