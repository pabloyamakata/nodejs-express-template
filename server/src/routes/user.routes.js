import { Router } from 'express';
import userValidator from '../validators/user.validator.js';
import { getUsers, getUser, createUser, updateUser, deleteUser, getUserPosts } from '../controllers/user.controller.js';

const userRouter = Router();

userRouter.get('/', getUsers);
userRouter.get('/:id', getUser);
userRouter.post('/', userValidator, createUser);
userRouter.put('/:id', updateUser);
userRouter.delete('/:id', deleteUser);

userRouter.get('/:id/posts', getUserPosts)

export default userRouter;
