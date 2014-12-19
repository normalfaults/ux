'use strict';

var _ = require('lodash');

/**@ngInject*/
function ProjectController($scope, $modal, $state, Project, project, alerts, projectQuestions) {
  this.project = project;
  $scope.project = this.project;
  $scope.alerts = alerts;
  $scope.questions = projectQuestions;

  $scope.editingProject = false;

  $scope.editProject = function(shouldEdit) {
    $scope.editingProject = shouldEdit;
  }

  $scope.updateProject = function() {
    var filteredProject = _.omit($scope.project, 'created_at', 'updated_at', 'deleted_at', 'id', 'services', 'domain',
        'url', 'state', 'state_ok', 'problem_count', 'account_number', 'resources', 'icon', 'cpu', 'hdd', 'ram',
        'status', 'users', 'order_history', 'description', 'cc', 'staff_id', 'approved', 'img', 'project_answers');

    if ($scope.project.project_answers.length > 0) {
      filteredProject.project_answers  = _.reduce($scope.project.project_answers,
          function(pas, pa){ pas.push(_.omit(pa, 'id', 'project_id', 'created_at', 'updated_at',
              'project_question')); return pas;}, []);
    }

    Project.update({id: $scope.project.id, project: filteredProject} , function() {
      $state.go('base.project', {id: $scope.project.id}, {reload: true});
    });
  }

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
  projectQuestions: function(DataService) {
    //todo: move this to a project questions resource.
    return DataService.getProjectQuestions().$promise;
  },
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
