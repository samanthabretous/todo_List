const mongoose = require('mongoose');

const todoSchema = mongoose.Schema({
  todoTitle: {type: String, required: true}
});


mongoose.model('Todo', todoSchema)