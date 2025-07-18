<<<<<<< HEAD
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({

  name: {
    type: String,
    required: [true, 'Please provide a name.'],
    trim: true,
  },


  email: {
    type: String,
    required: [true, 'Please provide an email.'],
    unique: true,
    match: [
      /^\S+@\S+\.\S+$/,
      'Please provide a valid email.',
    ],
  },

  password: {
    type: String,
    required: [true, 'Please provide a password.'],
  },

  role: {
    type: String,
    enum: ['startup', 'official'],
    default: 'startup',
  },
});

=======
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({

  name: {
    type: String,
    required: [true, 'Please provide a name.'],
    trim: true,
  },


  email: {
    type: String,
    required: [true, 'Please provide an email.'],
    unique: true,
    match: [
      /^\S+@\S+\.\S+$/,
      'Please provide a valid email.',
    ],
  },

  password: {
    type: String,
    required: [true, 'Please provide a password.'],
  },

  role: {
    type: String,
    enum: ['startup', 'admin'],
    default: 'startup',
  },
});

>>>>>>> 224938bb76f982a710d1f459b2a04c7b3afb16b3
module.exports = mongoose.model('User', UserSchema);