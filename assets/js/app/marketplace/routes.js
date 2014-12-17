'use strict';

var MarketplaceData = require('./marketplace_controller').resolve;

/**@ngInject*/
module.exports = function($stateProvider) {
  $stateProvider
    // marketplace
    .state('base.marketplace', {
      url: "^/marketplace",
      templateUrl: "/partials/marketplace/marketplace.html",
      resolve: MarketplaceData,
      controller: "MarketplaceController as marketplaceCtrl"
    });
};
