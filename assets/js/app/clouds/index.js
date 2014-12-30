'use strict';

var angular = require('angular');

var CloudsModule = angular.module('broker.clouds', [])
  .factory('CloudResource', require('./cloud_resource'));

module.exports = CloudsModule;
