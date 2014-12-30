'use strict';

/**@ngInject*/
var OrderItemResource = function($resource, ApiResource) {
  return $resource(ApiResource('orderItems'), { id: '@id', order_id: '@order_id' });
};

module.exports = OrderItemResource;
