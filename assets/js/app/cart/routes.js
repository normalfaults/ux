'use strict';

/**@ngInject*/
module.exports = function($stateProvider, USER_ROLES) {
  $stateProvider.state('base.cart', {
    url: "^/cart",
    templateUrl: '/partials/cart/cart.html',
    controller: "CartController as cartCtrl"
  });
};
