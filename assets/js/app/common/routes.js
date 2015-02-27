'use strict';

/**@ngInject*/
module.exports = function($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {
  $urlRouterProvider.otherwise("/");

  $locationProvider.html5Mode(true);

  $httpProvider.interceptors.push('httpInterceptor');
};
