const express = require('express')
const router = express.Router()
const messageController  = require('../controllers/messageController')

router.get('/', messageController.showMessage)
module.exports = router
