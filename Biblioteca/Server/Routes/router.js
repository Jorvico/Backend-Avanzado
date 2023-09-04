const express = require('express')
const router = express.Router()
const bookRouter = require('./bookRoutes')
const authorRouter = require('./authorRoutes')
const userRouter = require('./userRoutes')

router.use('/books', bookRouter)
router.use('/authors', authorRouter)
router.use('/users', userRouter)

module.exports = router