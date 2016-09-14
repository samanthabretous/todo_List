var http      = require('http'), 
    fs        = require('fs');

var server = http.createServer(function (req, res){

  var url = req.url;

  function readFile(filename, type){
    fs.readFile(filename, function(err, data) {
      res.writeHead(200, {"Content": "text/" + type});
      res.write(data)
      res.end()
    })
  }

  if(url === "/") readFile('index.html', "html");
  else if (url === "/assets/css/todo.css") readFile("assets/css/todo.css", "css");
  else if (url === "/assets/js/lib/jquery-3.0.0.min.js") readFile("assets/js/lib/jquery-3.0.0.min.js", "javascript");
  else if (url === "/assets/js/app.js") readFile("assets/js/app.js", "babel")

})

server.listen(3000, function() {
  console.log("Todo List App is listening on port 3000")
})