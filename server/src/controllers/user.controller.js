const conn = require('../config/conn.js');

const getUsers = (req, res) => {
    const sql = 'SELECT * FROM users';
    conn.query(sql, (err, users) => {
        if(err) throw err;
        res.send(users);
    });
};

const getUser = (req, res) => {
    const user = req.params.user;
    const sql = 'SELECT * FROM users WHERE id = ?';
    conn.execute(sql, [user], (err, user) => {
        if(err) throw err;
        res.send(user);
    });
};

module.exports = {
    getUsers,
    getUser
};
