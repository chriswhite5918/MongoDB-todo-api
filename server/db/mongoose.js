const mongoose = require('mongoose');

// Using mongoose promise instead of default one
mongoose.Promise = global.Promise;
// Mongoose connect
mongoose.connect('mongodb://localhost:27017/TodoApp');

module.exports = { mongoose };
