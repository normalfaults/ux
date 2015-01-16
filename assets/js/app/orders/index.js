'use strict';

var angular = require('angular');

var OrdersModule = angular.module('broker.orders', [])
  .controller('OrdersController', require('./orders_controller'))
  .factory('OrdersResource', require('./orders_resource'))
  .factory('OrderItemsResource', require('./order_items_resource'))
  .directive('ordersTable', require('./orders_table_directive'))
  .config(require('./routes'));

module.exports = OrdersModule;
