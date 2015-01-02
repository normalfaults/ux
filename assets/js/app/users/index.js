'use strict';

var angular = require('angular');

var UsersModule = angular.module('broker.users', [])
  .factory('UsersResource', require('./users_resource'))
  .directive('usersBox', require('./users_box_directive'));

module.exports = UsersModule;
