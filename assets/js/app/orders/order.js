'use strict';

/**@ngInject*/
function Order($resource, ApiResource) {
  return $resource(ApiResource('ordersById'), {}, {
    getRecentOrders: {
      method: "GET",
      isArray: true,
      url: ApiResource('recentOrders')
    }
  });
}

module.exports = Order;
