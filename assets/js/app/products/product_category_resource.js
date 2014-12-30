'use strict';

/**@ngInject*/
var ProductCategoryResource = function($resource, ApiResource) {
  return $resource(ApiResource('productCategoriesById'));
};

module.exports = ProductCategoryResource;
