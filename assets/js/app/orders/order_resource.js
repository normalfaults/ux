'use strict';

/**@ngInject*/
var OrderResource = function($resource, ApiResource) {
  return $resource(ApiResource('orders'), { id: '@id' });
};

module.exports = OrderResource;
