const { dbURI, port } = require('./config/environment')
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const logger = require('./lib/logger')
const router = require('./config/router')
require('dotenv').config()
// const errorHandler = require('./lib/errorHandler')


mongoose.set('useFindAndModify', false)

mongoose.connect(dbURI,
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
  () => logger.info('Mongo is connected')
)

app.use(bodyParser.json())

// app.use(logger)

app.use('/api', router)

// app.use(errorHandler)

app.get('/*', (req, res) => res.status(404).json({ message: 'Not found' }))

app.listen(port, () => logger.info(`node server running on :${port}`))

module.exports = app