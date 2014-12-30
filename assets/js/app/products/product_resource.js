'use strict';

/**@ngInject*/
var ProductResource = function($resource, ApiResource) {
  return $resource(ApiResource('productsById'), {'id': '@id'}, {
    'update': {
      method: 'PUT'
    }
  });
};

module.exports = ProductResource;
