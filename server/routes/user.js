const { Router } = require('express');

const userRouter = Router();

userRouter.get('/', (req, res) => {
    console.log(req.query);
    res.send(`Requested resource at ${req.url}`);
});

userRouter.get('/:user', (req, res) => {
    const user = req.params.user;
    res.send(`Requested resource at ${req.url}. Get user: ${user}`);
});

module.exports = userRouter;
