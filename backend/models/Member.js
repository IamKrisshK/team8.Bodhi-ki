const mongoose = require('mongoose');
const memberSchema = new mongoose.Schema({
  name: String,
  rollNumber: String,
  year: String,
  degree: String,
  email: String,
  contact: String,
  project: String,
  hobbies: [String],
  certificate: String,
  internship: String,
  aim: String,
  bio: String,
  image: String
}, { timestamps: true });
module.exports = mongoose.model('Member', memberSchema);
