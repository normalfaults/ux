'use strict';

/**@ngInject*/
function Order($resource, ApiResource) {
  return $resource(ApiResource('orders'));
}

module.exports = Order;
