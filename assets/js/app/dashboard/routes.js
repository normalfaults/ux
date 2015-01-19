'use strict';

var DashboardData = require('./dashboard_controller').resolve;

/**@ngInject*/
module.exports = function($stateProvider, USER_ROLES) {
  $stateProvider
    // Dashboard
    .state('base.dashboard', {
      url: "^/dashboard",
      templateUrl: "/partials/dashboard.html",
      resolve: DashboardData,
      controller: "DashboardController as dashboardCtrl"
    });
};