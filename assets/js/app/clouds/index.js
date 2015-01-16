'use strict';

var angular = require('angular');

var CloudsModule = angular.module('broker.clouds', [])
  .factory('CloudsResource', require('./clouds_resource'));

module.exports = CloudsModule;
