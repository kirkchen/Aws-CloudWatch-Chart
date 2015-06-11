'use strict';

var cloudWatchService = require('../../../services/cloudWatchService');

module.exports = function (req, res) {
  cloudWatchService.getMetrics(req.body.instanceId, req.body.instanceName, req.body.startTime, req.body.endTime)
    .then(function (data) {
      res.json(data);
    });
};
