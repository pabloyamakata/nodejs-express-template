const { createConnection } = require('mysql2');

const conn = createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'nodejs_express_template'
});

module.exports = conn;