'use strict';

var BaseData = require('./base_marketplace_controller').resolve,
  MarketplaceData = require('./marketplace_controller').resolve,
  ShowProductData = require('./show_product_controller').resolve;

/**@ngInject*/
module.exports = function($stateProvider) {
  $stateProvider
    .state('base.marketplace', {
      url: '/marketplace',
      abstract: true,
      template: '<div class="ui-view marketplace"></div>',
      resolve: BaseData,
      controller: 'BaseMarketplaceController as baseMarketplaceCtrl'
    })
    // marketplace
    .state('base.marketplace.list', {
      url: "/list",
      templateUrl: "/partials/marketplace/marketplace.html",
      resolve: MarketplaceData,
      controller: "MarketplaceController as marketplaceCtrl"
    })
    .state('base.marketplace.show', {
      url: '/show/{id:int}',
      templateUrl: '/partials/marketplace/product.html',
      controller: 'ShowProductController as showCtrl',
      resolve: ShowProductData
    });
};
