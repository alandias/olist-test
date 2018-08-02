
'use strict';

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.engine('.html', require('ejs').__express);
app.set('view engine', 'html');

app.use(express.static(__dirname));
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

app.get('*', function(req, res){
    res.render(__dirname + '/index.html');
});

var server = app.listen(3000, function () {});
var host = server.address().address;
var port = server.address().port;
console.log('App listening at http://%s:%s', host, port);