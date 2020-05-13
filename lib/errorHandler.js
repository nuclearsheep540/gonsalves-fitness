function errorHandler(err, req, res, next) {
  if (err.name === 'ValidationError') {
    const errors = {}

    for (const key in err.errors) {
      errors[key] = err.errors[key].message
    }
    err.errors = errors

    return res.status(422).json({ message: 'Unprocessable Entity', errors })
  }
  res.sendStatus(500)
  next()
}

module.exports = errorHandler
