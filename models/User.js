const mongoose = require('mongoose') // needed to create a new schema and model
const bcrypt = require('bcrypt') // our library used to hash our users passwords

const userSchema = new mongoose.Schema({ // Bulding a schema just like our animals or any other model
  name: { type: String, required: true, unique: true }, // defining fields in the same way
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true } // be careful not to make passwords unique!
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
userSchema
  .virtual('passwordConfirmation')
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