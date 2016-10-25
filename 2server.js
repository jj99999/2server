
// require the HTTP module
var http = require("http");

// define the port you want the server to listen to
var PORT = 7000;

var PORT2 = 7500;

// function for handling requests and sending responses
function handleRequest(request, response) {
	response.end("Y'all smell just like flowers!");
}

// create a server
var server = http.createServer(handleRequest);

// start up the server
server.listen(PORT, function(){

	// callback triggered when server is successfully listening
	console.log("Server listening on: http://localhost:%s", PORT);
})

// function for handling requests and sending responses
function handleRequest(request, response) {
	response.end("You really should eat better.  You don't love yourself enough.");
}

// create a server
var server = http.createServer(handleRequest);

// start up the server
server.listen(PORT2, function(){

	// callback triggered when server is successfully listening
	console.log("Server listening on: http://localhost:%s", PORT2);
})
