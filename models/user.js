'use strict';
const {
    Model
} = require('sequelize');
const { Sequelize } = require('Sequelize');
module.exports = (sequelize, DataTypes) => {
    class User extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    User.init({
        firstName: {
            type: Sequelize.STRING(15),
            allowNull: false,
        },
        lastName: {
            type: Sequelize.STRING(15),
        },
        email: {
            type: DataTypes.STRING,
            unique: true,
            validate: {
                isEmail: true,
            },
        },
        password: {
            type: DataTypes.STRING,
        }
    }, {
        sequelize,
        underscored = true,
        timestamps: true,
        paranoid: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: 'deleted_at',
        modelName: 'User',
    });
    return User;
};