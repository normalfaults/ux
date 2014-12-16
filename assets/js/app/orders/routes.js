'use strict';

/**@ngInject*/
module.exports = function($stateProvider, USER_ROLES) {
  $stateProvider
    .state('base.orderHistory', {
      url: "^/order-history"
    });
};
