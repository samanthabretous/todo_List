const mongoose = require('mongoose');

const todoSchema = mongoose.Schema({
  todoType: {type: String, required: true}
});


mongoose.model('Todo', todoSchema)