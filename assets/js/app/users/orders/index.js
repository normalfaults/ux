'use strict';

var angular = require('angular');

var UsersOrdersModule = angular.module('broker.users.orders', [])
    .factory('UserOrders', require('./user_orders'))
    .controller('UserOrdersController', require('./user_orders_controller'))
    .config(require('./routes'));

module.exports = UsersOrdersModule;