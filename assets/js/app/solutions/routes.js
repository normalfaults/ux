'use strict';

var DashboardData = require('./dashboard_controller').resolve;

/**@ngInject*/
module.exports = function($stateProvider, USER_ROLES) {
  $stateProvider
    // base state with solution statistics
    .state('base.solutionBase', {
      template: "<ui-view></ui-view>",
      data: {
        authorizedRoles: [USER_ROLES.user, USER_ROLES.admin]
      },
      controller: "SolutionBaseController as solutionBaseCtrl"
    })
    // solution dashboard
    .state('base.solutionBase.dashboard', {
      url: "^/dashboard",
      templateUrl: "/partials/dashboard.html",
      resolve: DashboardData,
      controller: "DashboardController as dashboardCtrl"
    })
};
