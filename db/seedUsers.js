const mongoose = require('mongoose') 
const { dbURI } = require('../config/environment') 
const User = require('../models/User')
const logger = require('../lib/logger')

mongoose.connect( 
  dbURI, 
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
  (err, db) => {
    if (err) return logger.error(err) 
    db.dropDatabase() 
      .then(() => { 
        return User.create([ 
          {
            name: 'ryhse',
            email: 'rhyse@demo',
            password: 'admin',
            passwordConfirmation: 'admin'
          },
          {
            name: 'demo',
            email: 'demo@demo',
            password: 'admin',
            passwordConfirmation: 'admin'
          }
        ]) 
      })
      .then(msg => logger.info(`${msg.length} message(s) created`)) 
      .catch(err => logger.error(err)) 
      .finally(() => mongoose.connection.close()) 
  }
)