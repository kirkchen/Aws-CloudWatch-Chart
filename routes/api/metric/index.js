'use strict';

var express = require('express');
var router = express.Router();

router.post('/', require('./requestMetric'));

module.exports = router;
