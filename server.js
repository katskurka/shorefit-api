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

app.get('/models', (request, response) => {
  response.send('This route will show all models of garage doors')
})

// Allows user to select a model by id
app.get('/models:id', (request, response) => {
  response.send('modelsById')
})

// This will select models based on material
app.get('/models:material', (request, response) => {
  response.send('modelsByMaterial')
})

// This will select models by style
app.get('/models:style', (request, response) => {
  response.send('modelsByStyle')
})

// This will allow users to submit new models
app.post('/models', (request, response) => {
  response.render('submitNewModel')
})

app.listen(1337, () => {
  // eslint-disable-next-line no-console
  console.log('welcome to nightvale')
})
