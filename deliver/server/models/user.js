const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  height: {
    type: Number,
  },
});

module.exports = mongoose.model('User', userSchema);
