'use strict';

function LogoutController(AuthService) {
  AuthService.logout();
}

module.exports = LogoutController;
