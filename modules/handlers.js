var fs = require('fs');
var formidable = require('formidable');

exports.upload = function(request, response) {
    var form = new formidable.IncomingForm();
    form.parse(request, function(error, fields, files) {
        fs.renameSync(files.upload.path, "test.png");
        fs.readFile('./templates/upload.html', function(err, html) {
            response.writeHead(200, {"Content-Type": "text/html"});
            response.write(html);
            response.end();            
        })
    });
}

exports.welcome = function(request, response) {
    fs.readFile('./templates/index.html', function(err, html) {
        response.writeHead(200, {"Content-Type" : "text/html; charset=utf-8"});
        response.write(html);
        response.end();
    });
}

exports.style = function(request, response) {
    fs.readFile('./templates/style.css', function(err, css) {
        response.writeHead(200, {"Content-Type" : "text/css; charset=utf-8"});
        response.write(css);
        response.end();
    });
}

exports.error = function(request, response) {
    response.write("404");
    response.end();
}

exports.show = function(request, response) {
    fs.readFile("test.png", "binary", function(error, file) {
        response.writeHead(200, {"Content-Type" : "image/png"});
        response.write(file, "binary");
        response.end();
    });
}