'use strict';

var angular = require('angular');

var SolutionsModule = angular.module('broker.solutions', [])
  .controller('DashboardController', require('./dashboard_controller'))
  .controller('SolutionBaseController', require('./solution_base_controller'))
  .factory('Solution', require('./solution'))
  .config(require('./routes'));

module.exports = SolutionsModule;
