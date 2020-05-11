const logger = require('../lib/logger')
const { SocketLabsClient } = require('@socketlabs/email')

const serverId = 30696
const injectionApiKey = 'n6G7MrTw5f2X3Ajp9QLi'

const client = new SocketLabsClient(serverId, injectionApiKey)

const Message = require('../models/Message')


//find all msgs
function index(req, res) {
  Message.find()
    .then(index => {
      res.status(200).json(index)
    })
    .catch(err => console.log(err))
}

//messages
function show(req, res) {
  Message.findById(req.params.id)
    .then((request) => {
      if (!request) return res.status(404).json({ message: 'Not found' })
      res.status(200).json(request)
    })
    .catch(() => res.status(404).json({ message: 'Not found' }))
}

//msg delete SECURE ROUTE
function remove(req,res) {
  Message.findByIdAndDelete(req.params.id)
    .then(request => {
      if (!request.user === req.currentUser._id) return res.status(401).json({ message: 'Unauthorized' })
      return request.remove()
    })
    .then(()=> res.sendStatus(204))
    .catch(err => {
      res.status(400).sjon(err)
      logger.error(err)
    })
}

//msg create
function create(req, res, next) {
  Message.create(req.body)
    .then(index => {
      res.status(201).json(index)
      send(req)
    })
    .then(res => res)
    .catch(next)
}


//comms to API for email
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


module.exports = { index, show, remove, create, send }