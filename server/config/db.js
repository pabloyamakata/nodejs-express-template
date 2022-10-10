const mysql2 = require('mysql2');

const db = mysql2.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'nodejs-express-template'
});

const dbConnect = () => {
    db.connect(err => {
        if(err) throw err;
        else console.log('Connection was successful');
    });
};

module.exports = dbConnect;
