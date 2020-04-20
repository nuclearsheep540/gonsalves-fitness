const mongoose = require('mongoose')

const StorySchema = new mongoose.Schema({
  client: { type: String, required: true },
  image: { type: String },
  before: { type: String },
  after: { type: String },
  description: { type: String },
  review: { type: String },
  created: { type: String },
  featured: { type: Boolean },
  user: { type: mongoose.Schema.ObjectId, ref: 'User', required: true }
}, {
  timestamps: true
})

StorySchema.plugin(require('mongoose-unique-validator'))

module.exports = mongoose.model('Story', StorySchema)