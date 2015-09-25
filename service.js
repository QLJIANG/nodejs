var http = require("http");
http.createServer(function(req, res) {
    res.end("Hello world from http!");
 }).listen(8080);
console.log("node.js is running!");