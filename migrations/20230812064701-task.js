"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      "task",
      {
        id: {
          type: Sequelize.UUID,
          primaryKey: true,
          defaultValue: Sequelize.literal("gen_random_uuid()"),
          unique: true,
          allowNull: false,
        },

        name: {
          type: Sequelize.STRING,
        },
      },
      { timestamps: false, underscored: true }
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  },
};
