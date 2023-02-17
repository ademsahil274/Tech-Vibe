const { findLastKey } = require('lodash');
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Post extends Model {}

Post.ini(
    {
        id: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true,
            authoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
        },
        date_created: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
        user_id: {
            type: DataTypes.STRING,
            references: {
                model: 'user',
                key: 'id',
            },
        },
    },
    {
       sequelize,
       timestamps: false,
       freezeTableName: true,
       underscored: true,
       modelName: 'post',
    }
);

module.exports = Post;