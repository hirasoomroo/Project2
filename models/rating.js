const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Rating extends Model {}

Rating.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'user',
          key: 'id'
        }
      },
      ratings: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      hiking_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'trails',
          key: 'id'
        }
      }
    },
    {
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'rating'
    }
  );

module.exports = Rating;