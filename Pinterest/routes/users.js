const mongoose = require('mongoose');
const plm = require('passport-local-mongoose')
const uri = "mongodb://localhost:27017/"

mongoose.connect(uri)
.then(() => console.log('MongoDB connected successfully'))
.catch(err => console.error('MongoDB connection error:', err));

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  password: {
    type: String,
  },
  posts: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Post'
  }],
  dp: {
    type: String,
    default: ''
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  fullname: {
    type: String,
    required: true,
    trim: true
  }
});
userSchema.plugin(plm)
// Create the User model
module.exports = mongoose.model('User', userSchema);

