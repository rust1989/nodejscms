require('./libs/dnsfix')
var express = require('express');
var app = express();
var request=require('request');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

//setup parser middleware
app.use(bodyParser.json({limit:'10mb'}));
app.use(bodyParser.urlencoded({ extended: false,limit:'10mb' }));
app.use(cookieParser());
app.use(express.static('public'));
app.on('servercreated',function (server) {
    require("./framework")(server,app);
});


module.exports = app;