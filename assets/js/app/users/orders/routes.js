'use strict';

var OrderData = require('./users_orders_controller').resolve;

/**@ngInject*/
module.exports = function($stateProvider) {
    $stateProvider
        .state('base.users.orders', {
            url: '/orders',
            templateUrl: '/partials/users/orders/index.html',
            controller: 'UsersOrdersController as usersOrders',
            resolve: OrderData
        });
};