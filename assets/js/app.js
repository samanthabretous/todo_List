 // var React = require('react'),
 //     ReactDOM  = require('react-dom');


var mainDisplay = React.createClass({
	render: function() {
		return (
			React.createElement('section', {}, 
				React.createElement('h1', {id: 'greet'}, 'To-Do List',
					React.createElement('i', {className: "fa fa-plus"})
				),
				React.createElement('input', {type: "text", placeholder:"Add New TO-DO"}),
				React.createElement('ul', {}, 
					React.createElement('li', {}, 
						React.createElement('span', {}, 
							React.createElement('i', {className : "fa fa-trash"})
						),
						"Musty"
					)
				)
			)
		)
	}
})


ReactDOM.render(React.createElement(mainDisplay), document.querySelector('#container'))


//Check off Specific ToDos by clicking
$("ul").on("click","li", function(){
	$(this).toggleClass("completed")
})

//Delete Specific ToDos by clicking
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove()
	})
	event.stopPropagation()
})

$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		//grabbing new todo tet from input
		var todoText = $(this).val()
		$(this).val("")
		//create a new li and add to ul
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>")
	}
})

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle()
})


