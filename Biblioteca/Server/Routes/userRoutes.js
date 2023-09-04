const express = require('express')
const router = express.Router()
const userController = require('../Controllers/userController')

router.get('/', userController.getAllUsers)
router.get('/id/:id', userController.getOneUser)
router.get('/userName/:userName', userController.getUserByName)
router.post('/', userController.createUser)
router.patch('/:id', userController.updateUser)
router.delete('/:id', userController.deleteUser)


module.exports = router