// eslint-disable-next-line no-console
const express = require('express')

const app = express()

app.use(express.json())

app.set('view engine', 'pug')

app.get('/', (request, response) => {
  response.render('index')
})

app.get('/doc', (request, response) => {
  return response.render('doc')
})

app.get('/doors', (request, response) => {
  response.send('This route will get all garage doors')
})

// get doors by search term
app.get('/doors/:searchTerm', (request, response) => {
  response.send('searchDoors')
})

// Allows user to select a door by id
app.get('/doors/:id', (request, response) => {
  response.send('doorsById')
})

app.get('/doors/:model', (request, response) => {
  response.send('doorsByModel')
})

// This will select doors based on material
app.get('/doors/:material', (request, response) => {
  response.send('doorsByMaterial')
})

// This will select models by style
app.get('/doors/:style', (request, response) => {
  response.send('doorsByStyle')
})

// This will allow users to submit new models
app.post('/models', (request, response) => {
  response.render('submitNewModel')
})

app.listen(1337, () => {
  // eslint-disable-next-line no-console
  console.log('welcome to nightvale')
})
