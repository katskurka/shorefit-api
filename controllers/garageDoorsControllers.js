const models = require('../models')

const getAllDoors = async (request, response) => {
  const garagedoors = await models.GarageDoors.findAll()

  return response.send(garagedoors)
}

const searchDoors = async (request, response) => {
  const { searchTerm } = request.params

  const garagedoor = await models.GarageDoors.findAll({
    where: {
      [models.Op.or]: [
        { doorModel: searchTerm },
        { doorModel: { [models.Op.like]: `%${searchTerm}%` } }
      ]
    }
  })

  return garagedoor ? response.send(garagedoor) : response.sendStatus(404)
}

const submitNewModel = async (request, response) => {
  try {
    const {
      doorModel, doorStyle, doorMaterial, rValue, costMeter
    } = request.body

    if (!doorModel || !doorStyle || !doorMaterial || !rValue || !costMeter) {
      return response.status(400).send('missing required fields')
    }

    const newDoor = await models.GarageDoors.create({
      doorModel, doorStyle, doorMaterial, rValue, costMeter
    })

    return response.status(201).send(newDoor)
  } catch (error) {
    return response.status(500).send('New door was not added, please try again')
  }
}

const deleteDoorById = async (request, response) => {
  const { id } = request.params
  const garagedoor = await models.GarageDoors.findOne({
    where: { id }
  })

  if (!garagedoor) {
    return response.status(400).send(`There are no models with ID of ${id}`)
  }
  try {
    await garagedoor.destroy()

    return response.send('Model has been removed')
  } catch (error) {
    return response.status(500).send('There has been an issue, please try again')
  }
}

module.exports = { getAllDoors, searchDoors, submitNewModel, deleteDoorById }
