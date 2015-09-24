// reference the http module so we can create a webserver
var http = require("http");
// create a server
http.createServer(function(req, res) {
    // on every request, we'll output 'Hello world'
    res.end("Hello world from Cloud9!");
}).listen(process.env.PORT, process.env.IP);
// }).listen(80, '127.0.0.1');
