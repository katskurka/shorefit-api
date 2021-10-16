
const Haas = (connection, Sequelize) => {
  return connection.define('haasdoors', {
    id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    doorModel: { type: Sequelize.STRING },
    doorStyle: { type: Sequelize.STRING },
    doorMaterial: { type: Sequelize.STRING },
    rValue: { type: Sequelize.INTEGER },
    costMeter: { type: Sequelize.STRING }
  },
  { paranoid: true })
}

module.exports = Haas

