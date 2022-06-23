'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Apply extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Apply.belongsTo(models.Posting, {
        foreignKey: { name: "posting_id", allowNull: false },
        onDelete: "CASCADE",
        onUpdate: "CASCADE"
      });
    }
  }
  Apply.init({
    member_id: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Apply',
  });
  return Apply;
};