'use strict';

// TODO: This controller is dealing with too much data

/**@ngInject*/
var BaseController = function($rootScope, $scope, $state, projects, applications, AuthService) {
  $rootScope.$state = $state;
  $rootScope.projects = projects;
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
  projects: function(ProjectResource) {
    return ProjectResource.query().$promise;
  },
  /**@ngInject*/
  applications: function(ApplicationResource) {
    return ApplicationResource.query().$promise;
  }
};

module.exports = BaseController;
