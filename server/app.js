'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var browserify = require('connect-browserify');
var reactify = require('reactify');

// Express
var app = express();
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

// Routes
require('./routes')(app);
app.use('/js/bundle.js', browserify.serve({
  entry: __dirname + '/../client/main',
  debug: true,
  watch: true,
  transforms: [reactify]
}));

// Start App
var server = app.listen(3001, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('App listening at http://%s:%s', host, port);
});
