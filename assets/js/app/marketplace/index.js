'use strict';

var angular = require('angular');

var MarketplaceModule = angular.module('broker.marketplace', [])
  .controller('BaseMarketplaceController', require('./base_marketplace_controller'))
  .controller('MarketplaceController', require('./marketplace_controller'))
  .controller('ShowProductController', require('./show_product_controller'))
  .config(require('./routes'));

module.exports = MarketplaceModule;
