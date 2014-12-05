'use strict';

/**@ngInject*/
function LogoutController(AuthService) {
  AuthService.logout();
}

module.exports = LogoutController;
