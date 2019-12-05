const router = require('express').Router()
const contactForm = require('../controllers/contactForm')

router.route('/contact')
  .post(contactForm.send)

module.exports = router