import React from 'react';
import store from '../store.js';
import {deleteTodoAsync} from './todo-actions';

const Todo = (props) => (
   <div>
     <li>{props.todo.todoTitle}
     <button onClick={store.dispatch.bind(this, deleteTodoAsync(props.todo._id))}><i className="fa fa-trash"></i></button>
     </li>
   </div>
)

export default Todo;
