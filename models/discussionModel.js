const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Discussion extends Model {}

Discussion.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
<<<<<<< HEAD
    // movie_id: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    // },
    // title: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    // },
    // created_by: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    // },
=======
    movie_id: {
      type: DataTypes.STRING,
    },
>>>>>>> c2506c449b4e0eaa2268d6d77ecb6f3d34fd6489
    text: {
      type: DataTypes.STRING,
      // prevents null values
      allowNull: false,
      // will only allow alphanumeric characters
    },
    public_rating: {
    type: DataTypes.INTEGER,
    allowNull: false,
    },
  },

  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'discussion',
  }
);

module.exports = Discussion;
