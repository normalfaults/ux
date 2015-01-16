'use strict';

var angular = require('angular');

var ProductsModule = angular.module('broker.products', [])
  .factory('ProductsResource', require('./products_resource'))
  .factory('ProductCategoryResource', require('./product_category_resource'))
  .directive('productBox', require('./product_box_directive'));

module.exports = ProductsModule;
