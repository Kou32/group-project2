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
    movie_id: {
      type: DataTypes.STRING,
    },
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
