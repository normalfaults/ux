'use strict';

var _ = require('lodash');

// Set outside of the controller instantiation to make sure we keep the state.
var isFailedLogin = false;

/**@ngInject*/
function LoginController($scope, $location, AuthService, ROUTES, ssoUrl) {
  this.$scope = $scope;
  this.$location = $location;
  this.AuthService = AuthService;
  this.ROUTES = ROUTES;
  this.ssoUrl = ssoUrl;

  // If the user is already logged in, take them to the default route.
  if (AuthService.isAuthenticated()) {
    $location.path(ROUTES.default);
  }
}

LoginController.prototype = {

  login: function () {

    // Reset the failed login flag.
    isFailedLogin = false;

    var credentials = {
      staff: {
        email: this.$scope.email,
        password: this.$scope.password
      }
    };

    // @todo Add optional to redirect back to where they were instead of always going to dashboard.
    this.AuthService.login(credentials)
      .success(_.bind(function () {
        this.$location.path(this.ROUTES.default);
      }, this))
      .error(_.bind(function() {
        isFailedLogin = true;
      }, this));
  },

  hasFailedLogin: function() {
    return isFailedLogin;
  }
};

LoginController.resolve = {
  /**@ngInject*/
  ssoUrl: function(AuthService) {
    return AuthService.ssoInit();
  }
};

module.exports = LoginController;
