'use strict';

/**@ngInject*/
function ProjectController($scope, project, solutions) {
  console.log(solutions);
  $scope.solution = solutions[0];
  $scope.solutions = solutions;
  $scope.project = project;
}

ProjectController.resolve = {
  /**@ngInject*/
  project: function(Project, $stateParams) {
    return Project.get({id: $stateParams.projectId});
  }
  //,
  ///**@ngInject*/
  //solutions: function(Solution) {
  //  return Solution.query();
  //}
  // TODO: Are we missing solutions here?
}

module.exports = ProjectController;
