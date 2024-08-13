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
    text: {
      type: DataTypes.STRING,
      // prevents null values
      allowNull: false,
      // will only allow alphanumeric characters
    },
    good_theory: {
      type: DataTypes.INTEGER,
    },
    reaching: {
      type: DataTypes.INTEGER,
    },
    release_year: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    public_rating: {
    type: DataTypes.INTEGER,
    allowNull: false,
    },
    internal_rating: {
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
