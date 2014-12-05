'use strict';

var angular = require('angular');

var BundlesModule = angular.module('broker.bundles', [])
  .factory('Bundle', require('./bundle'));

module.exports = BundlesModule;
