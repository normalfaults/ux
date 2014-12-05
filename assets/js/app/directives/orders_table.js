'use strict';

function OrdersTable($templateCache) {
  return {
    restrict: 'E',
    scope: {
      orders: "="
    },
    templateUrl: '/partials/common/orders-table.html'
  };
}

module.exports = OrdersTable;
