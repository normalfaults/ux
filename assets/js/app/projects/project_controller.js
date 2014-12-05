'use strict';

/**@ngInject*/
function ProjectController($scope, project, solutions) {
  $scope.solution = solutions[0];
  $scope.solutions = solutions;
  $scope.project = project;
}

ProjectController.resolve = {
  /**@ngInject*/
  project: function(Project, $stateParams) {
    return Project.get({id: $stateParams.projectId});
  }
  // TODO: Are we missing solutions here?
}

module.exports = ProjectController;
