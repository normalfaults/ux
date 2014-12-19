'use strict';

var angular = require('angular');

var CloudsModule = angular.module('broker.clouds', [])
  .factory('Cloud', require('./cloud'));

module.exports = CloudsModule;
