'use strict';

var angular = require('angular');

var ProductsModule = angular.module('broker.products', [])
  .factory('Product', require('./product'))
  .factory('ProductCategory', require('./product_category'))
  .directive('productsList', require('./products_directive'))
  .directive('productBox', require('./product_directive'));

module.exports = ProductsModule;
