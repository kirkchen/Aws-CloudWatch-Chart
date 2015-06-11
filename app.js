var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

// Routes
var cloudWatchService = require('./services/cloudWatchService');
app.post('/api/getMetrics', function (req, res) {
  cloudWatchService.getMetrics(req.body.instanceId, req.body.instanceName, req.body.startTime, req.body.endTime)
    .then(function (data) {
      res.json(data);
    });
});

// Start App
var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('App listening at http://%s:%s', host, port);
});
