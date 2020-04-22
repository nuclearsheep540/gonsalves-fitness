const mongoose = require('mongoose') // needed to create a new schema and model
const bcrypt = require('bcrypt') // our library used to hash our users passwords

const unsplashDefault = {
  "id": "dI3J7V0GknY",
  "created_at": "2018-02-23T17:31:29-05:00",
  "updated_at": "2020-04-14T01:05:35-04:00",
  "promoted_at": null,
  "width": 5448,
  "height": 4000,
  "color": "#549FE9",
  "description": "On my way to Johnston Canyon in Banff when this guy poked its white face out in the blue.  I had to drive a bit to find a safe place to stop and get out to take the picture, but I think it turned out ok.  This is the kind of image that gives me pause and to reflect on the forces that created the rockies those millions of years ago.  What a great way to time travel.",
  "alt_description": "low-angle photography of white mountain",
  "urls": {
    "raw": "https://images.unsplash.com/photo-1519424872176-907da8d127f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMjEyNn0",
    "full": "https://images.unsplash.com/photo-1519424872176-907da8d127f8?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjEyMjEyNn0",
    "regular": "https://images.unsplash.com/photo-1519424872176-907da8d127f8?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyMjEyNn0",
    "small": "https://images.unsplash.com/photo-1519424872176-907da8d127f8?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjEyMjEyNn0",
    "thumb": "https://images.unsplash.com/photo-1519424872176-907da8d127f8?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjEyMjEyNn0"
  },
  "links": {
    "self": "https://api.unsplash.com/photos/dI3J7V0GknY",
    "html": "https://unsplash.com/photos/dI3J7V0GknY",
    "download": "https://unsplash.com/photos/dI3J7V0GknY/download",
    "download_location": "https://api.unsplash.com/photos/dI3J7V0GknY/download"
  },
  "categories": [],
  "likes": 28,
  "liked_by_user": false,
  "current_user_collections": [],
  "user": {
    "id": "Sdh2YdLNcrI",
    "updated_at": "2020-04-20T06:07:46-04:00",
    "username": "jxb511",
    "name": "John Bakator",
    "first_name": "John",
    "last_name": "Bakator",
    "twitter_username": null,
    "portfolio_url": null,
    "bio": "An ardent member of generation Jones |Travel Writer | Travel Photographer and all round nice guy.   Contact me: John.Bakator@gmail.com even to just say hi!",
    "location": "Cochrane Alberta",
    "links": {
      "self": "https://api.unsplash.com/users/jxb511",
      "html": "https://unsplash.com/@jxb511",
      "photos": "https://api.unsplash.com/users/jxb511/photos",
      "likes": "https://api.unsplash.com/users/jxb511/likes",
      "portfolio": "https://api.unsplash.com/users/jxb511/portfolio",
      "following": "https://api.unsplash.com/users/jxb511/following",
      "followers": "https://api.unsplash.com/users/jxb511/followers"
    },
    "profile_image": {
      "small": "https://images.unsplash.com/profile-fb-1504194982-405c65f1fb61.jpg?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32",
      "medium": "https://images.unsplash.com/profile-fb-1504194982-405c65f1fb61.jpg?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64",
      "large": "https://images.unsplash.com/profile-fb-1504194982-405c65f1fb61.jpg?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128"
    },
    "instagram_username": "jbakator",
    "total_collections": 9,
    "total_likes": 12,
    "total_photos": 64,
    "accepted_tos": true
  },
  "exif": {
    "make": "Canon",
    "model": "Canon EOS 80D",
    "exposure_time": "1/1250",
    "aperture": "5.6",
    "focal_length": "200.0",
    "iso": 100
  },
  "location": {
    "title": "Banff National Park, Canada",
    "name": "Banff National Park, Canada",
    "city": null,
    "country": "Canada",
    "position": {
      "latitude": 51.4968464,
      "longitude": -115.9280562
    }
  },
  "views": 121418,
  "downloads": 489
}

const userSchema = new mongoose.Schema({ // Bulding a schema just like our animals or any other model
  name: { type: String, required: true, unique: true }, // defining fields in the same way
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  unsplash: { type: Object, default: unsplashDefault }
}, {
  timestamps: true // provides a createdAt, and updatedAt field that work out of the box for free!
})

userSchema.set('toJSON', { // this is what prevents the pasword being sent when our user object is converted to JSON
  transform(doc, json) {
    delete json.password // we delete the password key of the json object here
    delete json.email // also deleting email- optional
    return json
  }
})

// setting a virtual field on the model, this only exists when a user is first created and is not saved to the database, the idea here is that we only need a 'passwordConfirmation' once, to check if it and the password are the same, so there is no reason for us to actually store this value for the long term. A virtual field on the model fufills that requirement, once creating a user you will see that the password confirmation feild does not exist
userSchema.virtual('passwordConfirmation')
  .set(function setPasswordConfirmation(passwordConfirmation) {
    this._passwordConfirmation = passwordConfirmation
  })


// When we ask our model to create a new user (this happens in /controllers/auth in the register function, we make a call to User.create(....object)) mongoose runs through two steps, validate, where mongoose checks all the rquirements are met laid out in the schema above, and if it does, moves onto the save step, where it the new user is saved to the DB. We can write our own 'hooks' pre these events to perform more custom validations ourselves. Pre the validate phase we check the password and password confirmation match, if they do we allow it to move onto its own validations. Pre the save stage, we replace the users plain text password with a hashed version using the bcrypt library, then allow the save step.
userSchema.pre('validate', function checkPassword(next) { // running before validation step
  if (this.isModified('password') && this._passwordConfirmation !== this.password) {
    this.invalidate('passwordConfirmation', 'does not match') // throws an error back to the controllers if the password passConf do not match
  }
  next() // otherwise allows to move on the Validate step
})

userSchema.pre('save', function hashPassword(next) { // this happens before the mode is saved
  if (this.isModified('password')) { // if the password has been created or changed
    this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync(8)) // reassign as a hash of itself
  }
  next() // now move on to saving
})

userSchema.methods.validatePassword = function validatePassword(password) {// our own methods attached to our user model to validate if a password is correct at login. 
  return bcrypt.compareSync(password, this.password) // bcyrpt hashes the password our user is trying to login with the same it hashed the one stored in the DB when they registered, it then compares them for us to see if they match, and returns true or false depending on the outcome
}
module.exports = mongoose.model('User', userSchema) //exporting our models, with all its new methods and functiionality to be used in the auth controller. see /controllers/auth.js