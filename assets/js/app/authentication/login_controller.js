'use strict';

/**@ngInject*/
function LoginController($scope, $location, AuthService, ROUTES) {
  this.$scope = $scope;
  this.$location = $location;
  this.AuthService = AuthService;
  this.ROUTES = ROUTES;

  // If the user is already logged in, take them to the default route.
  if (AuthService.isAuthenticated()) {
    $location.path(ROUTES.default);
  }
}

LoginController.prototype.login = function() {
  var self = this;

  var credentials = {
    staff: {
      email: self.$scope.email,
      password: self.$scope.password
    }
  };

  // @todo Add optional to redirect back to where they were instead of always going to dashboard.
  self.AuthService.login(credentials).success(function() {
    self.$location.path(self.ROUTES.default)
  });
};

module.exports = LoginController;
