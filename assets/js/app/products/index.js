'use strict';

var angular = require('angular');

var ProductsModule = angular.module('broker.products', [])
  .factory('ProductResource', require('./product_resource'))
  .factory('ProductTypeResource', require('./product_type_resource'))
  .directive('productBox', require('./product_box_directive'));

module.exports = ProductsModule;
