const router = require('express').Router()
const contactForm = require('../controllers/contactForm')
const users = require('../controllers/auth')
const story = require ('../controllers/stories')
const secureRoute = require('../lib/secureRoute')

router.route('/contact')
  .post(contactForm.send)

router.route('/login') // just handling user login controller
  .post(users.login) // we dont use a param.id to find the user, see the controller

router.route('/story')
  .get(story.index)

module.exports = router