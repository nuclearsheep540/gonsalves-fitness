const mongoose = require('mongoose') 
const { dbURI } = require('../config/environment') 
const User = require('../models/User')
const Story = require('../models/Stories')
const logger = require('../lib/logger')
const Msg = require('../models/Message')

const time = new Date

mongoose.connect( 
  dbURI, 
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
  (err, db) => {
    if (err) return logger.error(err) 
    db.dropDatabase() 
      .then(() => { 
        return User.create([ 
          {
            name: 'Rhyse',
            email: 'gonsalvesfitness@gmail.com',
            password: 'admin',
            passwordConfirmation: 'admin'
          },
          {
            name: 'Demo',
            email: 'demo@demo',
            password: 'admin',
            passwordConfirmation: 'admin'
          }
        ]) 
      })
      .then(user => { 
        logger.info(`${user.length} user created`)
        return Story.create([
          {
            client: 'Sarah',
            image: 'https://i.ibb.co/746XyPn/girl-1.png',
            before: 'https://toonclips.com/600/unfit-cartoon-guy-holding-a-basketball-by-toonaday-1158.jpg',
            after: 'https://cdn.clipart.email/fdb89e0ed802f4bc60d00e8ee9f0feb9_the-track-athlete-who-beat-cancer-and-dreams-of-an-animation-_500-500.jpeg',
            description: 'Description from PT about client breif',
            review: 'Rhyse was really helpful, I enjoy training with him',
            published: true,
            featured: false,
            created: time.toDateString(),
            user: user[1]
          }
        ])
      })
      .then(msg => {
        logger.info(`${msg.length} stories created`)
        return Msg.create([
          {
            privacy: true,
            to: 'demo@demo',
            from: 'demo@demo',
            textBody: 'Demo message for testing purposes',
            htmlBody: '\n      <html>\n      <div>\n      <p>From: Demo, </p>\n      <p>Contact: 12345678910</p>\n      <p>Email: demo@demo</p>\n      <p>Demo message for testing purposes</p>\n      </div>\n      </html>',
            messageType: 'basic'
          }
        ])
      })
      .then(msg => logger.info(`${msg.length} stories created`)) 
      .catch(err => logger.error(err)) 
      .finally(() => mongoose.connection.close()) 
  }
)