const Sequelize = require('sequelize')
const allConfigs = require('../config/sequelize')
const GarageDoorModel = require('./garageDoors')


const environment = process.env.NODE_ENV || 'development'
const { username, password, database, host, dialect } = allConfigs[environment]

const connection = new Sequelize(database, username, password, {
  host, dialect, define: { timestamps: true }
})

const GarageDoors = GarageDoorModel(connection, Sequelize)

module.exports = { GarageDoors, Op: Sequelize.Op }
