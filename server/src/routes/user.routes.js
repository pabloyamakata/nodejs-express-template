const { Router } = require('express');
const userValidator = require('../validators/user.validator.js');
const { getUsers, getUser, createUser, updateUser, deleteUser, getUserPosts } = require('../controllers/user.controller.js');

const userRouter = Router();

userRouter.get('/', getUsers);
userRouter.get('/:id', getUser);
userRouter.post('/', userValidator, createUser);
userRouter.put('/:id', updateUser);
userRouter.delete('/:id', deleteUser);

userRouter.get('/:id/posts', getUserPosts)

module.exports = userRouter;
