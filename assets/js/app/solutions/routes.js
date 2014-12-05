'use strict';

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
      resolve: {
        alerts: ["DataService", function(DataService) {
          return DataService.getAlerts();
        }]
      },
      controller: "DashboardController as dashboardCtrl"
    })
    // solution manage page
    .state('base.solutionBase.manage', {
      url: "^/manage",
      templateUrl: "/partials/manage.html",
      data: {
        authorizedRoles: [USER_ROLES.user, USER_ROLES.admin]
      },
      resolve: {
        recentOrders: ["Order", function(Order) {
          return Order.getRecentOrders();
        }],
        recentUsers: ["User", function(User) {
          return User.getRecentUsers();
        }],
        manageValues: ["DataService", function(DataService) {
          return DataService.getManageValues();
        }],
        alerts: ["DataService", function(DataService) {
          return DataService.getAlerts();
        }]
      },
      controller: "ManageController as manageCtrl"
    })
}
