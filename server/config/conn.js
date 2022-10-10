const { createConnection } = require('mysql2');

const conn = createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'nodejs-express-template'
});

module.exports = conn;
