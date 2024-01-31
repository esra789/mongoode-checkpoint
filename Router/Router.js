const express = require('express');
const { addUser, getUsers, deleteUser, updateUser } = require('../Controller/Controller');
const userRouter=express.Router()
userRouter.post('/add',addUser)
userRouter.get('/get',getUsers)
userRouter.delete('/delete/:id',deleteUser)
userRouter.put('/update/:id',updateUser)
module.exports=userRouter;