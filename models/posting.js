'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Posting extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Posting.belongsTo(models.Company, {
        foreignKey: { name: "company_id", allowNull: false },
        onDelete: "CASCADE",
      });
    }
  }
  Posting.init({
    country: DataTypes.STRING,
    area: DataTypes.STRING,
    position: DataTypes.STRING,
    compensation: DataTypes.INTEGER,
    content: DataTypes.STRING,
    skill: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Posting',
  });
  return Posting;
};