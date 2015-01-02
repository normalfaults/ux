'use strict';

var angular = require('angular');

var AdminModule = angular.module('broker.admin', [
  require('./products').name,
  require('./projects').name,
  require('./users').name,
  require('./settings').name])
  .controller('AdminController', require('./admin_controller'))
  .config(require('./routes'));

module.exports = AdminModule;
