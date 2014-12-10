'use strict';

/**@ngInject*/
function ProductCategory($resource, ApiResource) {
  return $resource(ApiResource('productCategoriesById'));
}

module.exports = ProductCategory;
