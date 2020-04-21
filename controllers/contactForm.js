const logger = require('../lib/logger')
const { SocketLabsClient } = require('@socketlabs/email')

const serverId = 30696
const injectionApiKey = 'n6G7MrTw5f2X3Ajp9QLi'

const client = new SocketLabsClient(serverId, injectionApiKey)

const Message = require('../models/Message')

function index(req, res) {
  Message.find()
    .then(index => {
      res.status(200).json(index)
    })
    .catch(err => console.log(err))
}

function show(req, res) {
  Message.findById(req.params.id)
    .then((request) => {
      if (!request) return res.status(404).json({ message: 'Not found' })
      res.status(200).json(request)
    })
    .catch(() => res.status(404).json({ message: 'Not found' }))
}


function create(req, res, next) {
  Message.create(req.body)
    .then(index => {
      res.status(201).json(index)
      send(req)
    })
    .then(res => res)
    .catch(next)
}


// eslint-disable-next-line no-unused-vars
function send(req, _res){
  client.send(req.body).then(
    (res) => {
      //Handle successful API call
      logger.info(res)
    },
    (err) => {
      //Handle error making API call
      logger.error(err)
    })
}


module.exports = { index, show, send, create }