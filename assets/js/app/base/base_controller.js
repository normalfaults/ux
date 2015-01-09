'use strict';

// TODO: This controller is dealing with too much data

/**@ngInject*/
var BaseController = function($rootScope, $scope, $state, projects, AuthService) {
  $rootScope.$state = $state;
  $rootScope.projects = projects;

  /**
   * Track the previous state and the parameters.  Helpful for use in controllers
   * which may be accessed from two different states.
   *
   * @todo Potentially store this data so on a page refresh we can set the state back correctly for the user.
   */
  $rootScope.previousState;
  $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
    $rootScope.previousState = fromState.name;
    $rootScope.previousStateParams = fromParams;
  });

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
  }
};

module.exports = BaseController;
