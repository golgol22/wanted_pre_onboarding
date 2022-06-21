'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Posting', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      company_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        onDelete: "CASCADE",
        references: {
          model: "Company",
          key: "id",
        },
      },
      country: {
        type: Sequelize.STRING
      },
      area: {
        type: Sequelize.STRING
      },
      position: {
        type: Sequelize.STRING
      },
      compensation: {
        type: Sequelize.INTEGER
      },
      content: {
        type: Sequelize.STRING
      },
      skill: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Posting');
  }
};