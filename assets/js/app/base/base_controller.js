'use strict';

// TODO: This controller is dealing with too much data

/**@ngInject*/
var BaseController = function($rootScope, $scope, $sce, $state, projects, bundles, applications, AuthService, headerData, currentUser) {
  $rootScope.$state = $state;
  $rootScope.projects = projects;
  $rootScope.bundles = bundles;
  $rootScope.applications = applications;
  $rootScope.headerData = headerData;
  $rootScope.currentUser = currentUser;

  angular.forEach(projects, function(project) {
    project.sref = "base.project(" + angular.toJson({projectId: project.id}) + ")";
  });

  angular.forEach(headerData.notifications, function(item) {
    item.trustedHtml = $sce.trustAsHtml(item.text);
   });

  $rootScope.logout = function() {
    AuthService.logout();
  };
};

BaseController.resolve = {
  /**@ngInject*/
  projects: function(Project) {
    return Project.query().$promise;
  },
  /**@ngInject*/
  bundles: function(Bundle) {
    return Bundle.query().$promise;
  },
  /**@ngInject*/
  applications: function(Application) {
    return Application.query().$promise;
  },
  /**@ngInject*/
  solutions: function(Solution) {
    return Solution.query().$promise;
  },
  /**@ngInject*/
  headerData: function(HeaderData) {
    return HeaderData.get().$promise;
  },
  /**@ngInject*/
  currentUser: function(User) {
    return User.getCurrentMember().$promise;
  }
};

module.exports = BaseController;
