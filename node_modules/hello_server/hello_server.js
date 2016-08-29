var express = require('express');

var app = express();

app.get('/', function(request, response) {
    console.log(request.headers);
    response.send("Hello World");
});

app.get('/jedi/:firstname/:lastname', function(request, response){
    var first = request.params.firstname;
    var last = request.params.lastname;
    var jedi = first.substring(0, 2) + last.substring(0, 3);
    response.send(["Hello", jedi, first, last].join(" "));
});

app.get('/headers', function(request, response) {
    response.json(request.headers);
});

exports.app = app;
