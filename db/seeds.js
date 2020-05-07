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
      .then(user => { 
        logger.info(`${user.length} user created`)
        return Story.create([
          {
            client: 'Sarah',
            image: 'https://i.ibb.co/746XyPn/girl-1.png',
            before: 'https://toonclips.com/600/unfit-cartoon-guy-holding-a-basketball-by-toonaday-1158.jpg',
            after: 'https://cdn.clipart.email/fdb89e0ed802f4bc60d00e8ee9f0feb9_the-track-athlete-who-beat-cancer-and-dreams-of-an-animation-_500-500.jpeg',
            description: 'test description',
            review: 'Rhyse was really helpful, I enjoy training with him',
            published: true,
            featured: false,
            created: time.toDateString(),
            user: user[0]
          },
          {
            client: 'Mary',
            image: 'https://image.flaticon.com/icons/svg/201/201634.svg',
            before: '',
            after: '',
            description: 'test description',
            review: 'I feel a lot more body confident now',
            published: true,
            featured: true,
            created: time.toDateString(),
            user: user[0]
          }
        ])
      })
      .then(msg => {
        logger.info(`${msg.length} stories created`)
        return Msg.create([
          {
            privacy: true,
            to: 'demo@demo-account.com',
            from: 'rachel@dolittle.com',
            textBody: 'Hi, I was wondering what your prices were? Thanks!',
            htmlBody: '\n      <html>\n      <div>\n      <p>From: Rachel, Dolittle</p>\n      <p>Contact: 12345678910</p>\n      <p>Email: rachel@dolittle.com</p>\n      <p>Hi, I was wondering what your prices were? Thanks!</p>\n      </div>\n      </html>',
            messageType: 'basic'
          }
        ])
      })
      .then(msg => logger.info(`${msg.length} message(s) created`)) 
      .catch(err => logger.error(err)) 
      .finally(() => mongoose.connection.close()) 
  }
)