'use strict';

var angular = require('angular');

var AdminModule = angular.module('broker.admin', [])
  .controller('AdminController', require('./admin_controller'))
  .controller('ProductAdminController', require('./product_admin_controller'))
  .config(require('./routes'));

module.exports = AdminModule;
