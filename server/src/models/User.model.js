const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/sequelize.js');
const { Post } = require('./Post.model.js');

const User = sequelize.define('users', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    password: {
        type: DataTypes.STRING
    }
});

User.hasMany(Post, {
    foreignKey: 'userId',
    sourceKey: 'id'
});

Post.belongsTo(User, {
    foreignKey: 'userId',
    targetId: 'id'
});

module.exports = User;
