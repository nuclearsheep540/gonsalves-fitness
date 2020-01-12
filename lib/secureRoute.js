const User = require('../models/User') 
const { secret }  = require('../config/environment') 
const jwt = require('jsonwebtoken') 

function secureRoute(req, res, next) {
  if (!req.headers.authorization || !req.headers.authorization.startsWith('Bearer')) { // checks if our request has a header of authorization or if it does, does the value of authorizaion begin with the string 'Bearer'. If not we send back 401 error and end the process.
    return res.status(401).json({ message: 'Unauthorized' })
  }

  const token = req.headers.authorization.replace('Bearer ', '') //Removing the word Bearer from the string to leave us just the token. Don't forget the space after bearer, not inclusing it will make the token invalid

  jwt.verify(token, secret, (err, payload) => { // using jwt verify method to decode a token, needs the token, the secret used to encode it in the first place, and a call back function to handle error/success of decoding
    if (err) return res.status(401).json({ message: 'Unauthorized' }) // if the error object is defined. send back 401 and end the process
    User // otherwise try and find the user in the DB. We do this using the payload object from the succesfully decoded token. The 'payload.sub' key hold the user id that the token was issued too. To see where this was set check out '/controllers/auth login route'.
      .findById(payload.sub) // finding that user
      .then(user => {
        if (!user) return res.status(401).json({ message: 'Unauthorized' }) // if that user returns as null, send 401 kick the user out
        req.currentUser = user
        next() // if everything was good and we found a user, call next to allow the request to pass on through to the controller
      })
      .catch(() => res.status(401).json({ message: 'Unauthorized' })) // any other error kick the suer out
  })

}

module.exports = secureRoute