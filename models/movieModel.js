const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Movie extends Model {}

Movie.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      // prevents null values
      allowNull: false,
      // will only allow alphanumeric characters
      validate: {
        isAlphanumeric: true,
      },
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false,
    },
    director: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    release_year: {
        type: DataTypes.INTEGER,
        allowNull: false,
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
    modelName: 'movie',
  }
);

module.exports = Movie;
