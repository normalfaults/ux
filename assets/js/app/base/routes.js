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
      header: {
        templateUrl: "/partials/common/header.html",
        controller: "HeaderController as headerCtrl",
        resolve: HeaderData

      },
      "left-sidebar" : {
        templateUrl: "/partials/common/left-sidebar.html",
        controller: "LeftSidebarController as leftSidebarCtrl"
      },
      "" : {
        controller: "BaseController as baseCtrl",
        template: "<div ui-view></div>",
        resolve: BaseData
      }
    },
    resolve: {
      /**@ngInject*/
      currentUser: function(UsersResource) {
        return UsersResource.getCurrentMember().$promise;
      },
      /**@ngInject*/
      alerts: function(AlertsResource) {
        return AlertsResource.query().$promise;
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
      "" : {
        template: "<div ui-view></div>"
      }
    },
    data: {
      authorizedRoles: [USER_ROLES.all]
    }
  });
};
