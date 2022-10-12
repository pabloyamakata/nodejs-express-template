const express = require('express');
const userRouter = require('./routes/user.routes.js');
const { PORT } = require('./config/env.js');

const app = express();

app.get('/', (req, res) => {
    res.send(`Requested resource at ${req.url}`);
});

app.use('/api/users', userRouter);

app.use((req, res, next) => {
    res.status(404).json({
        message: 'Endpoint not found'
    });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}...`);
});
