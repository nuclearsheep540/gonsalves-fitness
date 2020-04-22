const User = require('../models/User')
const jwt = require('jsonwebtoken')
const { secret } = require('../config/environment')
const logger = require('../lib/logger')
// const axios = require('axios')

// REGISTER ROUTE - /register
function register(req, res) {
  User.create(req.body) 
    .then(user => res.status(201).json({ message: `Thanks for Registering ${user.username}` }))
    .catch(err => res.status(422).json(err))
}

// LOGIN ROUTE - /login
function login(req, res) {
  User.findOne({ email: req.body.username })
    .then(user => {
      if (!user || !user.validatePassword(req.body.password)) {
        return res.status(401).json({ message: 'Bad input' })
      }
      const token = jwt.sign({ sub: user._id }, secret, { expiresIn: '6h' })
      res.status(202).json({ name: `${user.name}`, message: 'Welcome back', token })
      logger.info(user)
    })
    .catch(() => {
      res.status(401).json({ message: 'catch error' })
      logger.info('username = ',req.body.username ,'pass=', req.body.password)
    })
}

// get user logged in
function call(req, res) {
  req.body.user = req.currentUser
  User.findById(req.currentUser)
    .then(elem => res.status(200).json(elem))
}

//update user
function edit(req, res) {
  logger.info('attempting user update')
  logger.info('found user ',req.currentUser._id)
  logger.info('body: ',req.body)
  User.findById(req.currentUser._id)
    .then(request => {
      if (!request) return res.status(404).json({ message: 'Not found' })
      return request.set(req.body)
    })
    .then(request => request.save())
    .then(request => res.status(202).json(request))
    .then(request => logger.info(request))
    .catch(err => logger.error(err))
}

module.exports = {
  register,
  login,
  call,
  edit
}