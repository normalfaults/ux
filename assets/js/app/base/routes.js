'use strict';

var BaseData = require('./base_controller').resolve;

/**@ngInject*/
module.exports = function($stateProvider, USER_ROLES) {
  $stateProvider.state('root', {
    url: "/",
    data: {
      authorizedRoles: [USER_ROLES.all]
    },
    controller: 'RootController'
  }).state('base', {
    abstract: true,
    templateUrl: "/partials/base.html",
    data: {
      authorizedRoles: [USER_ROLES.user, USER_ROLES.admin]
    },
    resolve: BaseData,
    controller: "BaseController"
  }).state('publicbase', {
    abstract: true,
    templateUrl: "/partials/base.html",
    data: {
      authorizedRoles: [USER_ROLES.all]
    }
  });
};
