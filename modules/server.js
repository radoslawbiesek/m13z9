var http = require('http');
var colors = require('colors');
var handlers = require('./handlers');

function start() {
    function onRequest(request, response) {
   
        switch (request.url) {
            case '/':
            case '/start':
                handlers.welcome(request, response);
                break;
            case '/upload':
                handlers.upload(request, response);
                break;
            case '/show':
                handlers.show(request, response);
                break;
            case '/style.css':
                handlers.style(request, response);
                break;                
            default:
                handlers.error(request, response);
        }
    }
    
    http.createServer(onRequest).listen(9000);
}

exports.start = start;