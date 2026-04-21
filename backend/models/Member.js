const mongoose = require('mongoose');
const memberSchema = new mongoose.Schema({
  name: String,
  role: String,
  email: String,
  contact: String,
  bio: String,
  image: String
}, { timestamps: true });
module.exports = mongoose.model('Member', memberSchema);
