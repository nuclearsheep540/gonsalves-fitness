const mongoose = require('mongoose')

const StorySchema = new mongoose.Schema({
  client: { type: String, required: true },
  image: { type: String },
  before: { type: String },
  after: { type: String },
  description: { type: String },
  review: { type: String },
  created: { type: String }
}, {
  timestamps: true
})

StorySchema.plugin(require('mongoose-unique-validator'))

module.exports = mongoose.model('Story', StorySchema)