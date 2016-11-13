import React from 'react';
import $ from 'jquery';
import {createTodoAsync} from './createTodoActions';
import store from '../store.js';

const CreateTodo = React.createClass({
  getInitialState() {
    return {
      todoTitle: ''
    }
  },
  handleChange(event) {
    this.setState({[event.target.name]: event.target.value})
  },
  submitNewTodo() {
    store.dispatch(createTodoAsync(this.state));
  },
  render(){
    return (
      <div className="createTodo">
        <input 
          type="text" 
          placeholder="Add New TO-DO"
          name="todoTitle"
          onChange={this.handleChange}
        />
        <button onClick={this.submitNewTodo}>
          <i className="fa fa-plus"></i>
        </button>
      </div>
    )
  }
})

const styles = {
  flex: 1,
  height: '100%'
}
export default CreateTodo;