'use strict';

var angular = require('angular');

var ApplicationsModule = angular.module('broker.applications', [])
  .factory('ApplicationResource', require('./application_resource'));

module.exports = ApplicationsModule;
