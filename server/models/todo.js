const mongoose = require('mongoose');
const Todo = mongoose.model('Todo', {
  text: {
    type: String,
    // Mongoose validation
    required: true,
    minlength: 1,
    trim: true // cut off the empty space for start and end
  },
  completed: {
    type: Boolean,
    default: false // Setting default value
  },
  completedAt: {
    type: Number,
    default: null // Setting default value
  }
});

module.exports = { Todo };
