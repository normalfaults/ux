'use strict';

/**@ngInject*/
var OrderItemResource = function($resource, ApiResource) {
  return $resource(ApiResource('orderItems'), { id: '@id', order_id: '@order_id'}, {
    startService: {
      method: 'PUT',
      url: ApiResource('orderItems') + '/start_service'
    },
    stopService: {
      method: 'PUT',
      url: ApiResource('orderItems') + '/stop_service'
    }
  });
};

module.exports = OrderItemResource;
