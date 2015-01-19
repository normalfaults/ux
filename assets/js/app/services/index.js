'use strict';

var angular = require('angular');

var ServicesModule = angular.module('broker.services', [])
  .controller('ServiceController', require('./service_controller'))
  .config(require('./routes'));

module.exports = ServicesModule;
