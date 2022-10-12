const app = require('./app.js');
const { PORT } = require('./config/env.js');

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}...`);
});
