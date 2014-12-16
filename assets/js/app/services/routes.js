'use strict';

var ServiceData = require('./service_controller').resolve;

/**@ngInject*/
module.exports = function($stateProvider, USER_ROLES) {
  $stateProvider
    // service details
    .state('base.service', {
      url: "^/service/:serviceId",
      templateUrl: "/partials/service.html",
      resolve: ServiceData,
      controller: "ServiceController as serviceCtrl"
    });
};
