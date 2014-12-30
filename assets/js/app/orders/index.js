'use strict';

var angular = require('angular');

var OrdersModule = angular.module('broker.orders', [])
  .factory('OrderResource', require('./order_resource'))
  .directive('ordersTable', require('./orders_table_directive'))
  .config(require('./routes'));

module.exports = OrdersModule;
