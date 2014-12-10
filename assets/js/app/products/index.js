'use strict';

var angular = require('angular');

var ProductsModule = angular.module('broker.products', [])
  .factory('Product', require('./product'))
  .factory('ProductCategory', require('./product_category'));

module.exports = ProductsModule;
