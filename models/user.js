const mongoose = require('mongoose');
const { Schema } = mongoose; // Perubahan agar mendapatkan Schema dari mongoose

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  }
});

module.exports = mongoose.model('User', userSchema);
