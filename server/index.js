// Require models
const Todo = require('./todo/todo-model');

// Require routes
const todo = require('./todo/todo-router');
const home = require('./home/home-router')

module.exports = {
  models: {
    Todo: Todo,
  },
  routes: {
    home: home,
    todo: todo, 
  }
}