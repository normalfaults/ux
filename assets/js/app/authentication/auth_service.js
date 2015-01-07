'use strict';

/**@ngInject*/
function AuthService($http, $location, Session, ApiResource, USER_ROLES, ROUTES) {
  var authService = {};

  authService.login = function(credentials) {
    return $http
      .post(ApiResource('signIn'), credentials)
      .success(function(data, statusCode) {
        Session.create(data.email, data.role);
      })
      .error(function() {
        // Do error here.
      })
  };

  authService.logout = function() {
    return $http
      .delete(ApiResource('signOut'))
      .success(function() {
        Session.destroy();
        $location.path(ROUTES.login);
      });
  };

  authService.isAuthenticated = function() {
    return !!Session.email;
  };

  authService.isAuthorized = function(authorizedRoles) {
    if (!angular.isArray(authorizedRoles)) {
      authorizedRoles = [authorizedRoles];
    }

    // If authorizedRoles contains 'all', then we allow it through.
    if (authorizedRoles.indexOf(USER_ROLES.all) !== -1) {
      return true;
    } else {
      return (authService.isAuthenticated() && authorizedRoles.indexOf(Session.role) !== -1);
    }
  };

  return authService;
};

module.exports = AuthService;
