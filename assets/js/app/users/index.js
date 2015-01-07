'use strict';

var angular = require('angular');

var UsersModule = angular.module('broker.users', [require('./orders').name])
  .factory('UsersResource', require('./users_resource'))
  .directive('usersBox', require('./users_box_directive'))
  .controller('UsersController', require('./users_controller'))
  .config(require('./routes'));

module.exports = UsersModule;
