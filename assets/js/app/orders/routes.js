'use strict';

/**@ngInject*/
module.exports = function($stateProvider) {
  $stateProvider
    .state('base.orders', {
      abstract: true,
      templateUrl: '/partials./orders/base.html'
    })
    .state('base.orders.order', {
      url: "/orders/:id",
      controller: "OrdersController as orderCtrl",
      templateUrl: "/partials/orders/order.html"
    });
};
