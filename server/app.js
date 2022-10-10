const express = require('express');
const app = express();

const userRouter = require('./routes/users.js');
app.use('/api/users', userRouter);

app.get('/', (req, res) => {
    res.send(`Requested resource at ${req.url}`);
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}...`);
});
