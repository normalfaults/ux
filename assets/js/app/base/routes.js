'use strict';

var BaseData = require('./base_controller').resolve;
var HeaderData = require('./header_controller').resolve;

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
    views: {
      header : {
        templateUrl: "/partials/common/header.html",
        controller: "HeaderController as headerCtrl",
        resolve: HeaderData

      },
      main : {
        templateUrl: "/partials/base.html",
        controller: "BaseController as baseCtrl",
        resolve: BaseData
      }
    },
    data: {
      authorizedRoles: [USER_ROLES.user, USER_ROLES.admin]
    }
  }).state('publicbase', {
    abstract: true,
    views: {
      header : {
        templateUrl: "/partials/common/header.html"
      },
      main: {
        templateUrl: "/partials/base.html"
      }
    },
    data: {
      authorizedRoles: [USER_ROLES.all]
    }
  });
};
