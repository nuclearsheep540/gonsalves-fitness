const mongoose = require('mongoose')

const PricesSchema = new mongoose.Schema(
  {
    packageName: { type: String, required: true } ,
    package: { type: mongoose.Schema.ObjectId, ref: 'User', required: true }
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model('Message', PricesSchema)