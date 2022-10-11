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

const updateUser = (req, res) => {
    const id = req.params.id;
    const { username, email, password } = req.body;
    const sql = 'UPDATE users SET username = ?, email = ?, password = ? WHERE id = ?';
    conn.execute(sql, [username, email, password, id], (err, result) => {
        if(err) throw err;
        res.send(result);
    });
};

const deleteUser = (req, res) => {
    const id = req.params.id;
    const sql = 'DELETE FROM users WHERE id = ?';
    conn.execute(sql, [id], (err, result) => {
        if(err) throw err;
        res.send(result);
    });
};

module.exports = {
    getUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser
};