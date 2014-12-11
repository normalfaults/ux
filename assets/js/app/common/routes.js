'use strict';

/**@ngInject*/
module.exports = function($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider, USER_ROLES) {
  $urlRouterProvider.otherwise("/");

  $locationProvider.html5Mode(true);

  $httpProvider.interceptors.push('httpInterceptor');
};
