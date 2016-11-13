import React from 'react';
import {connect} from 'react-redux';

import Todos from './Todos'

const TodosContainer = (props) => (
  props.todos ?
  <Todos todos={props.todos}/> : <h1>Loading...</h1>
)

const mapStateToProps = (state) =>  {
  return {todos: state.todos};
}


export default connect(mapStateToProps)(TodosContainer)