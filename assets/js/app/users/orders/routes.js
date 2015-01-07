'use strict';

var OrderData = require('./user_orders_controller').resolve;

/**@ngInject*/
module.exports = function($stateProvider) {
    $stateProvider
        .state('base.users.orders', {
            url: '/orders',
            templateUrl: '/partials/users/orders/index.html',
            controller: 'UserOrdersController as userOrders',
            resolve: OrderData
        });
};