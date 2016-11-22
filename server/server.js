'use strict';
var express = require('express')
var path = require('path')
var bodyParser = require('body-parser')
var app = express();


var input = "";
var DEFAULT_PORT = 3030;

var port = DEFAULT_PORT;


app.use(bodyParser.json());
app.use(express.static(path.join(__dirname,"../public")));
app.listen(port,function(){
  console.log("Started listening on port", port);
})

