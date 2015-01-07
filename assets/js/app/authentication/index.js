'use strict';

var angular = require('angular');

var AuthenticationModule = angular.module('broker.auth', [])
  .controller('LoginController', require('./login_controller'))
  .controller('LogoutController', require('./logout_controller'))
  .factory('AuthService', require('./auth_service'))
  .service('Session', require('./session'))
  .config(require('./routes'));

module.exports = AuthenticationModule;
