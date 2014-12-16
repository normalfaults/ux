'use strict';

/**@ngInject*/
function ProjectController($scope, $modal, $state, project, solutions, alerts) {
  $scope.solution = solutions[0];
  $scope.solutions = solutions;
  $scope.project = project;

  $scope.alerts = alerts;

  $scope.openProjectUsersModal = function () {

    var modalInstance = $modal.open({
      templateUrl: 'projects/users-modal.html',
      controller: 'ProjectUsersController'
    });

    modalInstance.result.then(function (selectedItems) {
    }, function () {
    });
  };
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
