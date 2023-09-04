const User = require('../Models/UserModel')

exports.getAllUsers = async (req, res) => {
    const users = await User.find()
    return res.status(200).json(users)
}

exports.getOneUser = async (req, res) => {
    const {id} = req.params
    const user = await User.findById(id)
    return res.status(200).json(user)
}

exports.getUserByName = async (req, res) => {
    const {userName} = req.params
    const user = await User.findOne({userName: userName})
    return res.status(200).json(user)
}

exports.createUser = async (req, res) => {
    const newUser = new User({...req.body})
    const insertedUser = await newUser.save()
    return res.status(201).json(insertedUser)
}

exports.updateUser = async (req, res) => {
    const {id} = req.params;
    await User.updateOne({_id: id}, {...req.body})
    const updatedUser = await User.findById(id)
    return res.status(201).json(updatedUser)
}

exports.deleteUser = async (req, res) => {
    const {id} = req.params
    const userToDelete = await User.findByIdAndDelete(id)
    res.status(204).json(userToDelete) 
}
