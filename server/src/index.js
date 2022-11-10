import app from './app.js';
import { PORT } from './config/env.js';
import sequelize from './config/sequelize.js';

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
