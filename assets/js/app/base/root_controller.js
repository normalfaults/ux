'use strict';

/**@ngInject*/
function RootController(AuthService, $location, ROUTES) {

  if (AuthService.isAuthenticated()) {
    $location.path(ROUTES.default);
  } else {
    $location.path(ROUTES.login);
  }
}

module.exports = RootController;
