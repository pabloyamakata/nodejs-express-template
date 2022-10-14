const { validationResult } = require('express-validator');
const User = require('../models/user.model.js');
const Post = require('../models/post.model.js');

const getUsers = async (req, res) => {
    try {
        const users = await User.findAll();
        res.json(users);
    } catch(err) {
        return res.status(500).json({ message: err.message });
    }
};

const getUser = async (req, res) => {
    const { id } = req.params;

    try {
        const user = await User.findByPk(id);
        res.json(user);
    } catch(err) {
        return res.status(500).json({ message: err.message });
    }
};

const createUser = async (req, res) => {
    const errors = validationResult(req);

    if(!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    
    const { username, email, password } = req.body;
    
    try {
        const user = await User.create({
            username,
            email,
            password
        });
    
        res.json(user);
    } catch(err) {
        return res.status(500).json({ message: err.message });
    }
};

const updateUser = async (req, res) => {
    const { id } = req.params;
    const { username, email, password } = req.body;

    try {
        const user = await User.findByPk(id);
        user.username = username;
        user.email = email;
        user.password = password;
        await user.save();

        res.json(user);
    } catch(err) {
        return res.status(500).json({ message: err.message });
    }
};

const deleteUser = async (req, res) => {
    const { id } = req.params;

    try {
        await User.destroy({
            where: {
                id
            }
        });

        res.sendStatus(204);
    } catch(err) {
        return res.status(500).json({ message: err.message });
    }
};

const getUserPosts = async (req, res) => {
    const { id } = req.params;

    try {
        const posts = await Post.findAll({
            where: {
                userId: id
            }
        });

        res.json(posts);
    } catch(err) {
        return res.status(500).json({ message: err.message });
    }
};

module.exports = {
    getUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser,
    getUserPosts
};
