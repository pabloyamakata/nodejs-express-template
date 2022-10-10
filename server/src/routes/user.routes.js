const { Router } = require('express');
const { getUsers, getUser } = require('../controllers/user.controller.js');

const userRouter = Router();

userRouter.get('/', getUsers);

userRouter.get('/:user', getUser);

module.exports = userRouter;
