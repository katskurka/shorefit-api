'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('garageDoors', {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      doorModel: { type: Sequelize.STRING },
      doorStyle: { type: Sequelize.STRING },
      doorMaterial: { type: Sequelize.STRING },
      rValue: { type: Sequelize.INTEGER },
      costMeter: { type: Sequelize.STRING },
      createdAt: { type: Sequelize.DATE, defaultValue: Sequelize.literal('NOW()') },
      updatedAt: { type: Sequelize.DATE, defaultValue: Sequelize.literal('NOW() ON UPDATE NOW()') },
      deletedAt: { type: Sequelize.DATE }
    })
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('garageDoors')
  }
}
