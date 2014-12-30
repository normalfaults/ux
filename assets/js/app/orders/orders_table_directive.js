'use strict';

/**@ngInject*/
var OrdersTable = function() {
  return {
    restrict: 'E',
    templateUrl: '/partials/common/orders-table.html',
    transclude: true,
    scope: {
      orders: "="
    }
  };
};

module.exports = OrdersTable;
