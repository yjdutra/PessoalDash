"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    Promise.all([
      queryInterface.createTable("banks", {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        },
        bank_name: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        month: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        limit: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        debt: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        status: {
          type: Sequelize.BOOLEAN,
          defaultValue: false,
          allowNull: false,
        },
        created_at: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        updated_at: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        deleted_at: {
          type: Sequelize.DATE,
        },
      }),
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("aguas");
  },
};
