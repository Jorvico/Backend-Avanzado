const express = require('express')
const router = express.Router()
const authorController = require('../Controllers/authorController')

router.get('', authorController.getAllAuthors)
router.get('/id/:id', authorController.getOneAuthor)
router.get('/name/:name', authorController.getAuthorByName)
router.post('', authorController.createAuthor)
router.patch('/:id', authorController.updateAuthor)
router.delete('/:id', authorController.deleteAuthor)

module.exports = router

