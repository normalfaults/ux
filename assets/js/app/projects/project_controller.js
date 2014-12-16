'use strict';

var _ = require('lodash');

/**@ngInject*/
function ProjectController($scope, $modal, project, alerts) {

  this.project = project;
  $scope.project = this.project;

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

ProjectController.prototype = {


  getBudgetData: function() {
    var projectBudget = this.project.budget || 0;
    var usedBudget = 0;

    _.each(this.project.order_history, function(item, key, all) {
      // @todo In the future we can split this off to complete/pending
      usedBudget += item.total;

    });

    return {
      'total' : projectBudget,
      'used'    : usedBudget,
      'usedPercent' : Math.round(((usedBudget / projectBudget) * 100))
    };
  }
};

module.exports = ProjectController;
