'use strict';

var angular = require('angular');

var AuthenticationModule = angular.module('broker.auth', [])
  .controller('LoginController', require('./login_controller'))
  .controller('LogoutController', require('./logout_controller'))
  .factory('AuthService', require('./auth_service'))
  .factory('UserResource', require('./user_resource'))
  .service('Session', require('./session'))
  .config(require('./routes'));

module.exports = AuthenticationModule;
