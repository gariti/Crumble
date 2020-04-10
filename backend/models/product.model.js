const mongoose = require('mongoose')

let ProductSchema = new mongoose.Schema({
  name: {type: String, required: true, max: 100},
  description: {type: String, required: true, max: 1000},
  category: {type: String, required: true, max: 100},
  isAvailible: {type: Boolean},
  thumbnail: {type: Buffer},
  imageData: {type: Buffer},
  price: {type: Number, required: true},
});
  
  module.exports = mongoose.model('Product', ProductSchema, 'products');