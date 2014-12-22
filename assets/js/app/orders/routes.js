'use strict';

/**@ngInject*/
module.exports = function($stateProvider) {
  $stateProvider
    .state('base.orders', {
      url: "/order-history"
    });
};
