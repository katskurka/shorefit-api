const Sequelize = require('sequelize')
const allConfigs = require('../config/sequelize')
const HaasModel = require('./haasDoors')
const BannerModel = require('./bannerDoors')
const AmarrModel = require('./amarrDoors')

const environment = process.env.NODE_ENV || 'development'
const { username, password, host, dialect, database } = allConfigs[environment]

const connection = new Sequelize(database, username, password, {
  host, dialect, define: { timestamps: true }
})

const Haas = HaasModel(connection, Sequelize)
const Banner = BannerModel(connection, Sequelize)
const Amarr = AmarrModel(connection, Sequelize)

module.exports = { Haas, Banner, Amarr, Op: Sequelize.Op }
