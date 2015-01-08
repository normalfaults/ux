'use strict';

var angular = require('angular');

var AlertsModule = angular.module('broker.alerts', [])
  .directive('alertsTable', require('./alerts_table_directive'))
  .factory('AlertsResource', require('./alerts_resource'));

module.exports = AlertsModule;
