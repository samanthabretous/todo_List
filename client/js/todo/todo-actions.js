import $ from 'jquery';

export const deleteTodo = todo_id => ({
  type: 'DELETE_TODO',
  payload: todo_id
})

export const deleteTodoAsync = (todo_id) => dispatch => {
  $.ajax({
    url: '/api/todos/',
    type: 'DElETE'
  })
  dispatch(deleteTodo(todo_id));
}