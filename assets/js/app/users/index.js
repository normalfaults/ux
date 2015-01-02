'use strict';

var angular = require('angular');

var UsersModule = angular.module('broker.users', [])
  .factory('UsersResource', require('./users_resource'));

module.exports = UsersModule;
