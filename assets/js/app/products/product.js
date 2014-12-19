'use strict';

/**@ngInject*/
function Product($resource, ApiResource) {
  return $resource(ApiResource('productsById'), {'id': '@id'}, {
    'update': {
      method: 'PUT'
    }
  });
}

module.exports = Product;
