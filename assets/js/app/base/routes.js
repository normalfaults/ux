'use strict';

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
        controller: "HeaderController as headerCtrl"

      },
      "left-sidebar" : {
        templateUrl: "/partials/common/left-sidebar.html",
        controller: "LeftSidebarController as leftSidebarCtrl"
      },
      "footer" : {
        templateUrl: "/partials/common/footer.html",
        controller: "FooterController as footerCtrl"
      },
      "" : {
        controller: "BaseController as baseCtrl",
        template: "<div ui-view></div>"
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
      },
      /**@ngInject*/
      projects: function(ProjectResource) {
        return ProjectResource.query().$promise;
      },
      /**@ngInject*/
      headerLinks: function(SettingsResource) {
        return SettingsResource.get({name: 'Header Links'}).$promise;
      },
      /**@ngInject*/
      footerLinks: function(SettingsResource) {
        return SettingsResource.get({name: 'Footer Links'}).$promise;
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
