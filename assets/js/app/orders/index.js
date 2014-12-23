'use strict';

var angular = require('angular');

var OrdersModule = angular.module('broker.orders', [])
  .factory('OrderResource', require('./order_resource'))
  .config(require('./routes'));

module.exports = OrdersModule;
