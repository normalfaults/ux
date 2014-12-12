'use strict';

/**@ngInject*/
function ProjectController($scope, $modal, project, solutions, alerts, ApiResource) {
  $scope.solution = solutions[0];
  $scope.solutions = solutions;
  $scope.project = project;

  $scope.alerts = alerts;

  $scope.searchURL = ApiResource("staffSearch");

  $scope.openProjectUsersModal = function () {

    var modalInstance = $modal.open({
      templateUrl: 'projects/users-modal.html',
      controller: 'ProjectUsersController'
    });

    modalInstance.result.then(function (selectedItem) {
      //might need to refresh users here
    }, function () {
      //modal closed... might need to refresh users here
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
