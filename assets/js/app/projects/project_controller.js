'use strict';

var _ = require('lodash');

/**@ngInject*/
function ProjectController($scope, $modal, $state, $stateParams, project, alerts, projectQuestions) {

  this.project = project;
  this.$modal = $modal;

  $scope.project = this.project;
  $scope.alerts = alerts;
  $scope.questions = projectQuestions;


  $scope.editProject = function() {
    $state.go('base.editProject', {id: $scope.project.id}, {reload: true});
  };
}

ProjectController.resolve = {
  /**@ngInject*/
  projectQuestions: function(DataService) {
    //todo: move this to a project questions resource.
    return DataService.getProjectQuestions().$promise;
  },
  /**@ngInject*/
  project: function(ProjectResource, $stateParams) {
    return ProjectResource.get({id: $stateParams.projectId}).$promise;
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

    var usedPercent = 0;
    if (projectBudget > 0) {
      usedPercent = Math.round(((usedBudget / projectBudget) * 100));
      if (usedPercent > 100) {
        usedPercent = 100;
      }
    }

    return {
      'total':       projectBudget,
      'used':        usedBudget,
      'usedPercent': usedPercent
    };
  }
};

module.exports = ProjectController;
