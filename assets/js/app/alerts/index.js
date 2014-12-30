'use strict';

var angular = require('angular');

var AlertsModule = angular.module('broker.alerts', [])
  .directive('alertsTAble', require('./alerts_table_directive'));

module.exports = AlertsModule;
