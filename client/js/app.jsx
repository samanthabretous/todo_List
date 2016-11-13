import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {Router, Route, IndexRoute, browserHistory} from 'react-router'

require('../css/todo.css')

//Component
import TodosContainer from './todos/TodosContainer'

//Redux
import store from './store'
import {getTodosAsync} from './todos/todos-actions'

const getAllTodos = () => {store.dispatch(getTodosAsync())}

render(
	<Provider store={store} >
		<Router history={browserHistory}>
			<Route path="/" component={TodosContainer} onEnter={getAllTodos}/>
		</Router>
	</Provider>, 
	document.getElementById('root')
)


// //Check off Specific ToDos by clicking
// $("ul").on("click","li", function(){
// 	$(this).toggleClass("completed")
// })

// //Delete Specific ToDos by clicking
// $("ul").on("click", "span", function(event){
// 	$(this).parent().fadeOut(500,function(){
// 		$(this).remove()
// 	})
// 	event.stopPropagation()
// })


// $(".fa-plus").click(function(){
// 	$("input[type='text']").fadeToggle()
// })


