import React from 'react'
import Todo from '../todo/Todo'

const Todos = (props) => {
  return (
    <section>
      <div>
        <h1 id="greet">To Do List </h1>
        <i className="fa fa-plus"></i>
      </div>
      <input type="text" placeholder="Add New TO-DO"></input>
      <ul>
        {props.todos.map((todo, idx)=><Todo key={idx} todo={todo}/>)}
      </ul>
    </section>        
  )
}

export default Todos