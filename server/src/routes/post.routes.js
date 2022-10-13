const { Router } = require('express');
const { getPosts, getPost, createPost, updatePost, deletePost } = require('../controllers/post.controller.js');

const postRouter = Router();

postRouter.get('/', getPosts);
postRouter.get('/:id', getPost);
postRouter.post('/', createPost);
postRouter.put('/:id', updatePost);
postRouter.delete('/:id', deletePost);

module.exports = postRouter;
