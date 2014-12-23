'use strict';

var angular = require('angular');

var ServicesModule = angular.module('broker.services', [])
  .controller('ServiceController', require('./service_controller'))
  .factory('ServiceResource', require('./service_resource'))
  .config(require('./routes'));

module.exports = ServicesModule;
