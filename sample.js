var http = require('http');


var server = http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.end("Hello World - 1\n");
});

server.listen(4001);

console.log('Server running at http://127.0.0.1:4001');

