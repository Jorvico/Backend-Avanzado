const express = require('express')
const router = express.Router()
const bookController = require('../Controllers/bookController')

router.get('', bookController.getAllBooks)
router.get('/:id', bookController.getOneBook)
router.post('', bookController.createBooks)
router.patch('/:id', bookController.updateBook)
router.delete('/:id', bookController.deleteBook)

module.exports = router

