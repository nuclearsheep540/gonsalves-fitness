const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema(
  {
    productName: { type: String, required: true },
    productDesc: { type: String, maxlength: 2000 },
    package: { type: Array, required: true }
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model('Message', ProductSchema)