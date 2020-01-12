const Story = require('../models/Stories')

// INDEX ROUTE - /story
function index(req, res) {
  Story
    .find()
    .then(elem => res.status(200).json(elem))
    .catch(() => res.status(404).json({ message: 'Not found' }))
}

// CREATE ROUTE - /story
function create(req, res, next) {
  req.body.user = req.currentUser
  Story.create(req.body)
    .then(index => res.status(201).json(index))
    .catch(next)
}

// SHOW ROUTE - /requests/:id
function show(req, res) {
  Story
    .findById(req.params.id)
    .then(request => {
      if (!request) return res.status(404).json({ message: 'Not found' })
      res.status(200).json(request)
    })
    .catch(() => res.status(404).json({ message: 'Not found' }))

}

// EDIT ROUTE - /story/:id
function edit(req, res) {
  Story
    .findById(req.params.id)
    .then(request => {
      if (!request) return res.status(404).json({ message: 'Not found' })
      return request.set(req.body)
    })
    .then(request => request.save())
    .then(request => res.status(202).json(request))
    .catch(err => console.log(err))
}

// DELETE ROUTE - /story/:id
function removeRoute(req,res) {
  Story 
    .findById(req.params.id)
    .then(request => {
      if (!request.user.equals(req.currentUser._id)) return res.status(401).json({ message: 'Unauthorized' })
      return request.remove()
    })
    .then(() => res.sendStatus(204))
    .catch(err => res.staus(400).json(err))
}

module.exports = {
  index,
  create,
  show,
  edit,
  removeRoute
}