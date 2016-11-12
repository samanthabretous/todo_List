const router = require('express').Router();
const Todo = require('mongoose').model('Todo');

//Response from the home page
const getTodo = (req, res, next) => {
  Todo.find({}, (err, data) => {
    res.send(data);
  })
}

const createTodo = (req, res) =>{
  console.log(req.body)
  Todo.create(req.body, (err) => {
    if(err) console.log("Error creating ToDo Action")
    else console.log('post successfully created');
  })
}

const deleteTodo =(req, res) =>{
  Todo.remove(req.body, (err) =>{
    if(err)console.log("Error removing todo")
  })
}

const updateTodo = (req, res) => {
  console.log(req.body)
  Todo.update(
    {_id: req.body.id}, 
    req.body, 
    {upsert: true}, 
    (err) => {
      if(err) console.log('there was an error updating')
      else console.log("updated todo")
    }
  );
}

const getOneTodo = (req, res) => {
  Todo.findById(req.params.id, (err, data) => {
    res.send(data);
  })
};

//configure router for get and post calls
router.route('/:id')
  .get(getOneTodo)

router.route('/')
  .get(getTodo)
  .post(createTodo)
  .delete(deleteTodo)
  .put(updateTodo)

module.exports = router;