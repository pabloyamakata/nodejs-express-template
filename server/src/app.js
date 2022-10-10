const express = require('express');
const userRouter = require('./routes/user.routes.js');

const app = express();

app.get('/', (req, res) => {
    res.send(`Requested resource at ${req.url}`);
});

app.use('/api/users', userRouter);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}...`);
});
