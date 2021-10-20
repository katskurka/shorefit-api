'use strict'

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('garageDoors', [
      { doorModel: 'SRP Hollow', doorStyle: 'Raised Panel', doorMaterial: 'Steel', rValue: 6.85, costMeter: '$' },
      { doorModel: 'Advantage', doorStyle: 'Raised Panel', doorMaterial: 'Steel', rValue: 6.7, costMeter: '$$' },
      { doorModel: 'Cambridge', doorStyle: 'Carriage House', doorMaterial: 'Wood', rValue: 8, costMeter: '$$$$$' },
      { doorModel: 'Lancaster', doorStyle: 'Barn', doorMaterial: 'Vinyl', rValue: 6.7, costMeter: '$$$$' },
      { doorModel: 'Classica', doorStyle: 'Carriage House', doorMaterial: 'Steel', rValue: 12, costMeter: '$$$' },
      { doorModel: 'Heritage', doorStyle: 'Specialty', doorMaterial: 'Wood', rValue: 9, costMeter: '$$$$$' },
      { doorModel: 'Horizon', doorStyle: 'Aluminum', doorMaterial: 'Glass', rValue: 6, costMeter: '$$$$$' },
      { doorModel: 'Lincoln', doorStyle: 'Raised Panel', doorMaterial: 'Steel', rValue: 9.05, costMeter: '$' },
      { doorModel: 'American Tradition', doorStyle: 'Barn', doorMaterial: 'Vinyl', rValue: 13.45, costMeter: '$$$' },
      { doorModel: 'Hemlock', doorStyle: 'Carriage House', doorMaterial: 'Wood', rValue: 10, costMeter: '$$$$' },
      { doorModel: 'V-Groove', doorStyle: 'Flush Panel', doorMaterial: 'Steel', rValue: 13.45, costMeter: '$$$' },
      { doorModel: 'Endura', doorStyle: 'Barn', doorMaterial: 'Vinyl', rValue: 7, costMeter: '$$$$' }
    ])
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('garageDoors')
  }
}
