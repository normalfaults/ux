'use strict';

var MarketplaceData = require('./marketplace_controller').resolve,
  ShowProductData = require('./show_product_controller').resolve;

/**@ngInject*/
module.exports = function($stateProvider) {
  $stateProvider
    // TODO : Create a marketplace base controller
    .state('base.marketplace', {
      abstract: true,
      template: '<div class="ui-view marketplace"></div>'
    })
    // marketplace
    .state('base.marketplace.list', {
      url: "/marketplace",
      templateUrl: "/partials/marketplace/marketplace.html",
      resolve: MarketplaceData,
      controller: "MarketplaceController as marketplaceCtrl"
    })
    .state('base.marketplace.show', {
      url: '/marketplace/show/:id',
      templateUrl: '/partials/marketplace/product.html',
      controller: 'ShowProductController as showCtrl',
      resolve: ShowProductData
    });
};
