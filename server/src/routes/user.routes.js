const { Router } = require('express');
const { getUsers, getUser, createUser } = require('../controllers/user.controller.js');

const userRouter = Router();

userRouter.get('/', getUsers);
userRouter.get('/:id', getUser);
userRouter.post('/create', createUser);

module.exports = userRouter;
