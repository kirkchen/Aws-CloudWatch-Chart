'use strict';

module.exports = function (app) {
  app.use('/api/metrics', require('./api/metric/index'));
};
