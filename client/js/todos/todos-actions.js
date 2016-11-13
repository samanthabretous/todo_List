import $ from 'jquery';

export const getTodos = todos => ({
  type: 'GET_TODOS',
  payload: todos
})

export const getTodosAsync = () => (dispatch) => {
  $.ajax({
      url: '/api/todos',
      type: 'GET'
    })
    .done((todos) => {
      console.log("async",todos)
      dispatch(getTodos(todos))
    })
}