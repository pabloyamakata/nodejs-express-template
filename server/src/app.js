const express = require('express');
const userRouter = require('./routes/user.routes.js');
const postRouter = require('./routes/post.routes.js');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send(`Requested resource at ${req.url}`);
});

app.use('/api/users', userRouter);
app.use('/api/posts', postRouter);

app.use((req, res, next) => {
    res.status(404).json({
        message: 'Endpoint not found'
    });
});

module.exports = app;
