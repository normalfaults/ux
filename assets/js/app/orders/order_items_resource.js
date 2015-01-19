'use strict';

/**@ngInject*/
var OrderItemsResource = function($resource, apiResource) {
  return $resource(apiResource('orderItems'), { id: '@id', order_id: '@order_id'}, {
    startService: {
      method: 'PUT',
      url: apiResource('orderItems') + '/start_service'
    },
    stopService: {
      method: 'PUT',
      url: apiResource('orderItems') + '/stop_service'
    }
  });
};

module.exports = OrderItemsResource;
