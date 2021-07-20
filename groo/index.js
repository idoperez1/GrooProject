const express = require('express')
const db = require('./db')
const questionRouter = require('./routes/question-router')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()
const port = 3000

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())

db.on('error', error => {console.log(error)})

app.get('/', (req, res) => {
  res.send('The API is running...')
})

app.use('/api', questionRouter)

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`)
})