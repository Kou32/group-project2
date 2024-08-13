const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class User extends Model { }

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        username: {
            type: DataTypes.STRING,
            // prevents null values
            allowNull: false,
            // will only allow alphanumeric characters
            validate: {
                isAlphanumeric: true,
            },
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true,
            },
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            // must be longer than 8 characters
            validate: {
                len: [8],
            },
        },
        date_created: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    },
    {
        hooks: {
            beforeCreate: async (newUser) => {
                try {
                    newUser.password = await bcrypt.hash(newUser.password, 10);
                    return newUser;
                } catch (err) {
                    console.log(err);
                    return err;
                }
            },
            beforeUpdate: async (updatedUser) => {
                try {
                    updatedUser.password = await bcrypt.hash(
                        updatedUser.password,
                        10
                    );
                    return updatedUser;
                } catch (err) {
                    console.log(err);
                    return err;
                }
            }
        },

    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'user',
    }
);

module.exports = User;
