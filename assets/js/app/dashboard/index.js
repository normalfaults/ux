'use strict';

var angular = require('angular');

var DashboardModule = angular.module('broker.dashboard', [])
  .controller('DashboardController', require('./dashboard_controller'))
  .config(require('./routes'));

module.exports = DashboardModule;