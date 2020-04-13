const mongoose = require('mongoose')
const Schema = mongoose.Schema


let UserSchema = new mongoose.Schema({
  name: {type: String, required: true, max: 100},
  bio: {type: String, required: false, max: 1000},
  email: {type: String, required: true, max: 100},
  products: [{type: Schema.Types.ObjectId, ref: 'Product'}],
  thumbnail: {type: Buffer},
  imageData: {type: Buffer}
});
  
  module.exports = mongoose.model('User', UserSchema, 'users');