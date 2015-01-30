'use strict';

/**@ngInject*/
function RootController(AuthService, $location, ROUTES, $rootScope, APP_CONFIG) {

  $rootScope.APP_CONFIG = APP_CONFIG;

  if (AuthService.isAuthenticated()) {
    $location.path(ROUTES.default);
  } else {
    $location.path(ROUTES.login);
  }
}

module.exports = RootController;
