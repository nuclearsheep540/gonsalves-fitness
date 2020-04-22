const mongoose = require('mongoose')

const StorySchema = new mongoose.Schema({
  client: { type: String, required: true, unique: true },
  image: { type: String },
  before: { type: String },
  after: { type: String },
  description: { type: String, required: true, maxlength: 500 },
  review: { type: String, required: true, maxlength: 500 },
  created: { type: String },
  published: { type: Boolean, default: false },
  featured: { type: Boolean, default: false },
  user: { type: mongoose.Schema.ObjectId, ref: 'User', required: true }
}, {
  timestamps: true
})

StorySchema.plugin(require('mongoose-unique-validator'))

module.exports = mongoose.model('Story', StorySchema)