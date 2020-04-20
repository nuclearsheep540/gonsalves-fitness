const router = require('express').Router()
const contactForm = require('../controllers/contactForm')
const users = require('../controllers/auth')
const story = require('../controllers/stories')
const secureRoute = require('../lib/secureRoute')

router.route('/contact')
  .post(contactForm.create) //accept contact, store
   // post to api
   // update stored msg with http status

router.route('/login') // just handling user login controller
  .post(users.login) // we dont use a param.id to find the user, see the controller

router.route('/story')
  .get(secureRoute, story.index)
  .post(secureRoute, story.create)

router.route('/published')
  .get(story.published)

router.route('/story/:id')
  .get(story.show)
  .put(secureRoute, story.edit)
  .delete(secureRoute, story.removeRoute)

module.exports = router