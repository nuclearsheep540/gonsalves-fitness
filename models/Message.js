const mongoose = require('mongoose')

const MessageSchema = new mongoose.Schema(
  {
    to: { type: String },
    from: { type: String },
    textBody: { type: String },
    htmlBody: { type: String },
    messageType: { type: String },
    status: { type: String },
    privacy: { type: Boolean, required: true }
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model('Message', MessageSchema)