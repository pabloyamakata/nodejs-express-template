const conn = require('../config/conn.js');

const getUsers = (req, res) => {
    const sql = 'SELECT * FROM users';
    conn.query(sql, (err, users) => {
        if(err) throw err;
        res.send(users);
    });
};

const getUser = (req, res) => {
    const id = req.params.id;
    const sql = 'SELECT * FROM users WHERE id = ?';
    conn.execute(sql, [id], (err, user) => {
        if(err) throw err;
        res.send(user);
    });
};

const createUser = (req, res) => {
    const { username, email, password } = req.body;
    const sql = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';
    conn.execute(sql, [username, email, password], (err, user) => {
        if(err) throw err;
        res.send(user);
    });
};

module.exports = {
    getUsers,
    getUser,
    createUser
};
