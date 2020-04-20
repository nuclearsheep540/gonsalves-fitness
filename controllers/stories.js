const Story = require('../models/Stories')
const logger = require('../lib/logger')

// INDEX ROUTE - /story
// thisi s called, Using a query builder
function index(req, res) {
  Story.find({
    user: /host/
  }).where('user').equals(req.currentUser)
    .then(elem => res.status(200).json(elem))
    .catch(() => res.status(404).json({ message: 'Not found' }))
}

// index of published
function published(req, res) {
  Story.find({
    featured: /host/
  }).where('featured').equals(true)
    .then(elem => res.status(200).json(elem))
    .catch(()=> res.status(404).json({ message: ' 404 not found' }))
}

// CREATE ROUTE - /story
function create(req, res, next) {
  req.body.user = req.currentUser
  console.log('this user is trying to create a new entry: ',req)
  Story.create(req.body)
    .then(index => res.status(201).json(index))
    .catch(next)
}

// SHOW ROUTE - /requests/:id
function show(req, res) {
  Story.findById(req.params.id)
    .then(request => {
      if (!request) return res.status(404).json({ message: 'Not found' })
      res.status(200).json(request)
    })
    .catch(() => res.status(404).json({ message: 'Not found' }))

}

// EDIT ROUTE - /story/:id
function edit(req, res) {
  Story.findById(req.params.id)
    .then(request => {
      if (!request) return res.status(404).json({ message: 'Not found' })
      return request.set(req.body)
    })
    .then(request => request.save())
    .then(request => res.status(202).json(request))
    .then(request => logger.debug(request))
    .catch(err => logger.error(err))
}

// DELETE ROUTE - /story/:id
function removeRoute(req,res) {
  Story.findByIdAndDelete(req.params.id)
    .then(request => {
      if (!request.user === req.currentUser._id) return res.status(401).json({ message: 'Unauthorized' })
      return request.remove()
    })
    .then(() => res.sendStatus(204))
    .catch(err => {
      res.status(400).json(err)
      logger.error(err)
    })
}

module.exports = {
  index,
  published,
  create,
  show,
  edit,
  removeRoute
}