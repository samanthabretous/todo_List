const express = require('express');
const app = express()
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

mongoose.connect('mongodb://localhost/to-do-list');
const port = 3000


const db = mongoose.connection

const models = require('./index').models
const routes = require('./index').routes

db.on('open', function() {
  app.use(bodyParser.urlencoded({extended:false}))
  app.use(express.static('client/js/bundle'))
  
  // Handles API/server side routing
  app.use('/api/todo', routes.todo);
  
  // Handles client side routing
  app.use('*', routes.home)
  app.listen(port, () => console.log("ToDo App is listening on port", port))
})