const mongoose = require('mongoose') 
const { dbURI } = require('../config/environment') 
const User = require('../models/User')

mongoose.connect( 
  dbURI, 
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
  (err, db) => {
    if (err) return console.log(err) 
    db.dropDatabase() 
      .then(() => { 
        return User.create([ 
          {
            name: 'ryhse',
            email: 'admin',
            password: 'admin',
            passwordConfirmation: 'admin'
          }
        ]) 
      })
     
      .then(user => console.log(`${user.length} created`)) 
      .catch(err => console.log(err)) 
      .finally(() => mongoose.connection.close()) 
  }
)