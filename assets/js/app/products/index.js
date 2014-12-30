'use strict';

var angular = require('angular');

var ProductsModule = angular.module('broker.products', [])
  .factory('ProductResource', require('./product_resource'))
  .factory('ProductCategoryResource', require('./product_category_resource'))
  .directive('productsList', require('./products_directive'))
  .directive('productBox', require('./product_directive'));

module.exports = ProductsModule;
