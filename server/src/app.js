import express from 'express';
import userRouter from './routes/user.routes.js';
import postRouter from './routes/post.routes.js';

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

export default app;
