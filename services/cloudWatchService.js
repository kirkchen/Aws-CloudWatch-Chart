'use strict';

var Q = require('q');
var AWS = require('aws-sdk');
var config = require('../config/config.json');
AWS.config.update({region: config.region});

var cloudwatch = new AWS.CloudWatch();

exports.getMetrics = function (instanceId, instanceName, startTime, endTime) {
  var defer = Q.defer();

  var params = {
    StartTime: startTime,
    EndTime: endTime,
    MetricName: 'CPUUtilization',
    Namespace: 'AWS/EC2',
    Period: 60,
    Statistics: ['Average'],
    Dimensions: [{
      Name: 'InstanceId',
      Value: instanceId
    }],
    Unit: 'Percent'
  };

  cloudwatch.getMetricStatistics(params, function (err, data) {
    if (err) {
      defer.reject(err);
    }

    var result = data.Datapoints
      .sort(function (a, b) {
        return new Date(b.Timestamp) - new Date(a.Timestamp);
      })
      .map(function (point) {
        return {
          x: point.Timestamp,
          y: point.Average
        }
      });

    defer.resolve({
      name: instanceName,
      values: result
    })
  });

  return defer.promise;
};
