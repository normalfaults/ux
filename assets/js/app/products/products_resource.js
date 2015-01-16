'use strict';

/**@ngInject*/
var ProductsResource = function($resource, ApiResource) {
  return $resource(ApiResource('productsById'), {'id': '@id'}, {
    'update': {
      method: 'PUT'
    }
  });
};

module.exports = ProductsResource;
