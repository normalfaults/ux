'use strict';

var angular = require('angular');

module.exports = angular.module('broker.common', [
  require('./exception_handler').name,
  require('./constants').name
]);