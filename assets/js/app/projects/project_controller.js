'use strict';

/**@ngInject*/
function ProjectController($scope, project, solutions, alerts) {
  $scope.solution = solutions[0];
  $scope.solutions = solutions;
  $scope.project = project;

  $scope.alerts = alerts;
}

ProjectController.resolve = {
  /**@ngInject*/
  project: function(Project, $stateParams) {
    return Project.get({id: $stateParams.projectId}).$promise;
  },
  /**@ngInject*/
  alerts: function(DataService) {
    // @todo This should be switched to something that only returns alerts for the project.
    return DataService.getAlerts().$promise;
  }
};

module.exports = ProjectController;
