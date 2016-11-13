import React from 'react'
import Todo from '../todo/Todo'
import CreateTodo from '../createTodo/CreateTodo'

const Todos = (props) => {
  return (
    <section>
      <h1 id="greet">To Do List </h1>
      <CreateTodo />
      <ul>
        {props.todos.map((todo, idx)=><Todo key={idx} todo={todo}/>)}
      </ul>
    </section>        
  )
}

export default Todos