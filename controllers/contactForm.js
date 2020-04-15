const { SocketLabsClient } = require('@socketlabs/email')

const serverId = 30696
const injectionApiKey = 'n6G7MrTw5f2X3Ajp9QLi'

const client = new SocketLabsClient(serverId, injectionApiKey)

const Message = require('../models/Message')

function create(req, res, next) {
  Message.create(req.body)
    .then(index => res.status(201).json(index))
    .then(res => {
      console.log(res.req.body)
      return res
    })
    .catch(next)
}


// eslint-disable-next-line no-unused-vars
function send(req, _res){
  client.send(req.body).then(
    (res) => {
      //Handle successful API call
      console.log(res)
    },
    (err) => {
      //Handle error making API call
      console.log(err)
    })
}


module.exports = { send, create }