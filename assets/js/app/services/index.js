'use strict';

var angular = require('angular');

var ServicesModule = angular.module('broker.services', [])
  .controller('ServiceController', require('./service_controller'))
  .factory('Service', require('./service'))
  .config(require('./routes'));

module.exports = ServicesModule;
