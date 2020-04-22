const mongoose = require('mongoose')
const Schema = mongoose.Schema

let ProductSchema = new Schema({
  name: {type: String, required: true, max: 100},
  description: {type: String, required: true, max: 1000},
  category: {type: String, required: true, max: 100},
  user: {type: Schema.Types.ObjectId, ref: 'User', required: true},
  isAvailible: {type: Boolean},
  thumbnail: {type: Buffer},
  imageData: {type: Buffer},
  price: {type: Number, required: true},
});
  
  module.exports = mongoose.model('Product', ProductSchema, 'products');