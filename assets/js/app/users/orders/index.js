'use strict';

var angular = require('angular');

var UsersOrdersModule = angular.module('broker.users.orders', [])
    .factory('UsersOrders', require('./users_orders'))
    .controller('UsersOrdersController', require('./users_orders_controller'))
    .config(require('./routes'));

module.exports = UsersOrdersModule;