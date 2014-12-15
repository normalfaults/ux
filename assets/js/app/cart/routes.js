'use strict';

/**@ngInject*/
module.exports = function($stateProvider, USER_ROLES) {
  $stateProvider.state('base.cart', {
    url: "^/cart",
    templateUrl: '/partials/cart/cart.html',
    data: {
      authorizedRoles: [USER_ROLES.user]
    },
    controller: "CartController as cartCtrl"
  })
};
