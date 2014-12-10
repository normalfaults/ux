'use strict';

/**@ngInject*/
function Product($resource, ApiResource) {
  return $resource(ApiResource('productsById'));
}

module.exports = Product;
