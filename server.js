/**
 * Created by nick_wen on 2015/10/19.
 */
var http = require("http");
var url = require("url");

function start(route,handle){
http.createServer(function onRequest(request,response){

    var pathname = url.parse(request.url).pathname;

    console.log("Request for " + pathname + " received.");
    response.writeHead(200, {"Content-Type": "text/plain"});

    var content = route(handle, pathname);
    response.write(content);
    response.end();

}).listen(8888);

console.log("Server has started.");
};
exports.start = start;
