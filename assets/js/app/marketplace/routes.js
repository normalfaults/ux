'use strict';

var MarketplaceData = require('./marketplace_controller').resolve;

/**@ngInject*/
module.exports = function($stateProvider, USER_ROLES) {
  $stateProvider
    // marketplace
    .state('base.marketplace', {
      url: "^/marketplace",
      templateUrl: "/partials/marketplace.html",
      resolve: MarketplaceData,
      controller: "MarketplaceController as marketplaceCtrl"
    });
};
