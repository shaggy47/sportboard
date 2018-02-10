var express = require('express');

var app = express();

app.get('/', function(request, response){
    response.send("Hello World");
});

app.listen(3000,function(){
    console.log("express started listening on port 3000");
});