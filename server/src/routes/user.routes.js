const { Router } = require('express');
const { getUsers, getUser, createUser, updateUser, deleteUser } = require('../controllers/user.controller.js');

const userRouter = Router();

userRouter.get('/', getUsers);
userRouter.get('/:id', getUser);
userRouter.post('/', createUser);
userRouter.patch('/:id', updateUser);
userRouter.delete('/:id', deleteUser);

module.exports = userRouter;
