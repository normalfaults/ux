'use strict';

var angular = require('angular');

var ApplicationsModule = angular.module('broker.applications', [])
  .factory('Application', require('./application'));

module.exports = ApplicationsModule;
