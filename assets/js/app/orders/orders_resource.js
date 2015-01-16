'use strict';

/**@ngInject*/
var OrdersResource = function($resource, ApiResource) {
  return $resource(ApiResource('orders'), { id: '@id' });
};

module.exports = OrdersResource;
