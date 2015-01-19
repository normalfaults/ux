'use strict';

/**@ngInject*/
var ProductCategoryResource = function($resource, apiResource) {
  return $resource(apiResource('productCategoriesById'));
};

module.exports = ProductCategoryResource;
