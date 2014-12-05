'use strict';

var angular = require('angular');

var OrdersModule = angular.module('broker.orders', [])
  .factory('Order', require('./order'))
  .config(require('./routes'));

module.exports = OrdersModule;
