import React from 'react'
import {render} from 'react-dom'


const MainDisplay = () => {
	return (
		<section>
			<h1 id="greet">To Do List<i className="fa fa-plus"></i></h1>
			<input type="text" placeholder="Add New TO-DO"></input>
			<ul>
				<li>
					<span>
						<i className="fa fa-trash">Musty</i>							
					</span></li>
			</ul>
		</section>				
	)
}

render(
	<MainDisplay/>, 
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


