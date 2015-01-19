'use strict';

/**@ngInject*/
var ProductTypeResource = function($resource, ApiResource) {
  return $resource(ApiResource('productTypesById'));
};

module.exports = ProductTypeResource;
