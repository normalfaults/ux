'use strict';

/**@ngInject*/
var OrdersResource = function($resource, apiResource) {
  return $resource(apiResource('orders'), { id: '@id' });
};

module.exports = OrdersResource;
