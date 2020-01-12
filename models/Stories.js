const mongoose = require('mongoose')

const RequestSchema = new mongoose.Schema({
  client: { type: String, required: true },
  image: { type: [String] }
}, {
  timestamps: true
})

RequestSchema.plugin(require('mongoose-unique-validator'))

module.exports = mongoose.model('Story', RequestSchema)