'use strict';

var DashboardData = require('./dashboard_controller').resolve,
  ManageData = require('./manage_controller').resolve;

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
      data: {
        wrapperCssClass: "dashboard-bg",
        authorizedRoles: [USER_ROLES.user, USER_ROLES.admin]
      },
      templateUrl: "/partials/dashboard.html",
      resolve: DashboardData,
      controller: "DashboardController as dashboardCtrl"
    })
    // solution manage page
    .state('base.solutionBase.manage', {
      url: "^/manage",
      templateUrl: "/partials/manage.html",
      data: {
        authorizedRoles: [USER_ROLES.user, USER_ROLES.admin]
      },
      resolve: ManageData,
      controller: "ManageController as manageCtrl"
    })
};
