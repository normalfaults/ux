'use strict';

/**@ngInject*/
function Order($resource, ApiResource) {
  return $resource(ApiResource('orders'), { id: '@id' });
}

module.exports = Order;
