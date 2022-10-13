const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/sequelize.js');

const Post = sequelize.define('posts', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: DataTypes.STRING
    },
    body: {
        type: DataTypes.STRING
    },
    isDraft: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }
});

module.exports = Post;
