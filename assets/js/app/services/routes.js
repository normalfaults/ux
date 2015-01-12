'use strict';

var ServiceData = require('./service_controller').resolve;

/**@ngInject*/
module.exports = function($stateProvider, USER_ROLES) {
  $stateProvider
    // service details
    .state('base.service', {
      // @todo order/:order_id should not be needed but API endpoints require it currently.
      // :id is order_item.id
      url: "^/order/:order_id/service/:id",
      templateUrl: "/partials/service.html",
      resolve: ServiceData,
      controller: "ServiceController as serviceCtrl"
    });
};
