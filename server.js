// eslint-disable-next-line no-console
const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.set('view engine', 'pug')
app.use(bodyParser.json())
app.use(express.static('public'))

app.get('/', (request, response) => {
  response.render('index')
})

app.get('/models', (request, response) => {
  response.send('This route will show all models of garage doors')
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
