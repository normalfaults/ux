'use strict';

/**@ngInject*/
var ProductsResource = function($resource, apiResource) {
  return $resource(apiResource('productsById'), {'id': '@id'}, {
    'update': {
      method: 'PUT'
    }
  });
};

module.exports = ProductsResource;
