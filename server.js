// eslint-disable-next-line no-console
const express = require('express')
const { getAllDoors, searchDoors, submitNewModel, deleteDoorById } = require('./controllers/garageDoorsControllers')

const app = express()

app.use(express.json())

app.set('view engine', 'pug')

app.get('/', (request, response) => {
  response.render('index')
})

app.get('/doc', (request, response) => {
  return response.render('doc')
})

app.get('/doors', getAllDoors)

app.get('/doors/:searchTerm', searchDoors)

app.post('/models', submitNewModel)

app.delete('/doors/:id', deleteDoorById)

app.listen(1337, () => {
  // eslint-disable-next-line no-console
  console.log('welcome to nightvale')
})
