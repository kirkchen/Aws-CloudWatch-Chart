'use strict';

var express = require('express');
var bodyParser = require('body-parser');

// Express
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

// Routes
require('./routes')(app);

// Start App
var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('App listening at http://%s:%s', host, port);
});
