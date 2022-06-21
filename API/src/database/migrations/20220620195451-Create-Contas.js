"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    Promise.all([
      queryInterface.createTable("bills", {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        },
        type: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        month: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        value: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        paid: {
          type: Sequelize.BOOLEAN,
          defaultValue: false,
          allowNull: false,
        },
        payment_date: {
          type: Sequelize.DATE,
          allowNull: true,
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
