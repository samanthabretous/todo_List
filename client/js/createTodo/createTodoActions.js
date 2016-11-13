import $ from 'jquery';

export const createTodo = newTodo => ({
  type: 'CREATE_TODO',
  payload: newTodo
})

export const createTodoAsync = (newTodo) => dispatch => {
  $.ajax({
    url: '/api/todos',
    type: 'POST',
    data: newTodo, 
  })
  .done(data => {
    console.log("data",data)
    dispatch(createTodo(data));
  })
}