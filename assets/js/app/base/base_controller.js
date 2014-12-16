'use strict';

// TODO: This controller is dealing with too much data

/**@ngInject*/
var BaseController = function($rootScope, $scope, $state, projects, bundles, applications, AuthService) {
  $rootScope.$state = $state;
  $rootScope.projects = projects;
  $rootScope.bundles = bundles;
  $rootScope.applications = applications;

  angular.forEach(projects, function(project) {
    project.sref = "base.project(" + angular.toJson({projectId: project.id}) + ")";
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
  }
};

module.exports = BaseController;
