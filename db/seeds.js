const mongoose = require('mongoose') 
const { dbURI } = require('../config/environment') 
const User = require('../models/User')
const Story = require('../models/Stories')

const time = new Date

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
      .then(user => { 
        console.log(`${user.length} user created`)
        return Story.create([
          {
            client: 'Sarah',
            image: 'https://i.ibb.co/746XyPn/girl-1.png',
            before: 'https://toonclips.com/600/unfit-cartoon-guy-holding-a-basketball-by-toonaday-1158.jpg',
            after: 'https://cdn.clipart.email/fdb89e0ed802f4bc60d00e8ee9f0feb9_the-track-athlete-who-beat-cancer-and-dreams-of-an-animation-_500-500.jpeg',
            description: 'test description',
            review: 'Rhyse was really helpful, I enjoy training with him',
            created: time.toDateString()
          },
          {
            client: 'Mary',
            image: 'https://image.flaticon.com/icons/svg/201/201634.svg',
            description: '',
            before: '',
            after: '',
            created: time.toDateString()
          }
        ])
      })
      .then(story => console.log(`${story.length} stories created`)) 
      .catch(err => console.log(err)) 
      .finally(() => mongoose.connection.close()) 
  }
)