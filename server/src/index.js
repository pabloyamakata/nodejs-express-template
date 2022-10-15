const app = require('./app.js');
const { PORT } = require('./config/env.js');
const sequelize = require('./config/sequelize.js');

const index = async () => {
    try {
        await sequelize.sync({ force: false });
        app.listen(PORT);
        console.log(`Server running on http://localhost:${PORT}...`);
    } catch(err) {
        console.log(err);
    }
}

index();
