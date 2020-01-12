const mongoose = require('mongoose') 
const { dbURI } = require('../config/environment') 
const User = require('../models/User')
const Story = require('../models/Stories')

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
      .then(requests => { 
        console.log(`${'👱'.repeat(requests.length)} requests created`)
        return Story.create([
          {
            client: 'Sarah',
            image: 'https://i.ibb.co/746XyPn/girl-1.png',
            description: 'test description'
          },
          {
            client: 'Mary',
            image: 'https://image.flaticon.com/icons/svg/201/201634.svg',
            description: ''
          }
        ])
      })
      .then(user => console.log(`${user.length} created`)) 
      .catch(err => console.log(err)) 
      .finally(() => mongoose.connection.close()) 
  }
)