'use strict';

/**@ngInject*/
module.exports = function($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider, USER_ROLES) {
  $urlRouterProvider.otherwise("/");

  $stateProvider
    // Search and Compare
    .state('base.searchAndCompare', {
      url: "^/search-and-compare",
      data: {
        authorizedRoles: [USER_ROLES.user, USER_ROLES.admin]
      }
    })
    .state('base.helpDesk', {
      url: "^/help-desk",
      data: {
        authorizedRoles: [USER_ROLES.user, USER_ROLES.admin]
      }
    })
    // create alert
    .state('base.createAlert', {
      url: "^/create-alert",
      templateUrl: "/partials/create-alert.html",
      data: {
        authorizedRoles: [USER_ROLES.user, USER_ROLES.admin]
      }
    });
  $locationProvider.html5Mode(true);

  $httpProvider.interceptors.push('httpInterceptor');
};
