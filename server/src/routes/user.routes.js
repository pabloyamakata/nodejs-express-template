const { Router } = require('express');
const { getUsers, getUser, createUser, updateUser, deleteUser, getUserPosts } = require('../controllers/user.controller.js');

const userRouter = Router();

userRouter.get('/', getUsers);
userRouter.get('/:id', getUser);
userRouter.post('/', createUser);
userRouter.put('/:id', updateUser);
userRouter.delete('/:id', deleteUser);

userRouter.get('/:id/posts', getUserPosts)

module.exports = userRouter;
