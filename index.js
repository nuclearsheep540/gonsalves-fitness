const { dbURI, port } = require('./config/environment')
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const logger = require('./lib/logger')
const router = require('./config/router')
require('dotenv').config()
// const errorHandler = require('./lib/errorHandler')


app.use(express.static(`${__dirname}/dist`))

mongoose.set('useFindAndModify', false)

mongoose.connect(process.env.MONGOD_URI || dbURI,
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
  () => logger.info('Mongo is connected')
)

app.use(bodyParser.json())

// app.use(logger)

app.use('/api', router)

// app.use(errorHandler)

// app.get('/*', (req, res) => res.status(404).json({ message: 'Not found' }))

app.use('/*', (req, res) => res.sendFile(`${__dirname}/dist/index.html`))

app.listen(port, () => logger.info(`node server running on :${port}`))

module.exports = app