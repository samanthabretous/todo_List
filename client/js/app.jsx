import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {Router, Route, IndexRoute, browserHistory} from 'react-router'

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

// $("input[type='text']").keypress(function(event){
// 	if(event.which === 13){
// 		//grabbing new todo tet from input
// 		var todoText = $(this).val()
// 		$(this).val("")
// 		//create a new li and add to ul
// 		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>")
// 	}
// })

// $(".fa-plus").click(function(){
// 	$("input[type='text']").fadeToggle()
// })


