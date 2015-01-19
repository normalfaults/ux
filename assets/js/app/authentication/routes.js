'use strict';

/**@ngInject*/
module.exports = function($stateProvider, USER_ROLES) {
  $stateProvider.state('publicbase.login', {
    url: "^/login",
    templateUrl: '/partials/login.html',
    data: {
      authorizedRoles: [USER_ROLES.all]
    },
    controller: "LoginController as loginCtrl"
  }).state('publicbase.logout', {
    url: "^/logout",
    controller: "LogoutController as logoutCtrl"
  });
};
