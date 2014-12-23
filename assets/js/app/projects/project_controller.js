'use strict';

var _ = require('lodash');

/**@ngInject*/
function ProjectController($scope, $modal, $state, $stateParams ,Project, ProjectUser, project, alerts, projectQuestions) {
  this.project = project;
  this.$modal = $modal;
  this.ProjectUser = ProjectUser;

  $scope.project = this.project;
  $scope.alerts = alerts;
  $scope.questions = projectQuestions;


  $scope.editProject = function() {
    $state.go('base.editProject', {id: $scope.project.id}, {reload: true});
  };

  $scope.reload = function() {
    $state.go('base.project', {id: $scope.project.id}, {reload: true});
  }
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

  removeUserFromProject: function(index){
    var self = this;
    self.ProjectUser.delete({id: self.project.id, staff_id: self.project.users[index].id}).$promise.then(
      function(data){
        self.project.users.splice(index, 1);
      },
      function(error) {
        alert("There was an error removing this user. Please try again later");
      }
    );
  },

  openAddUsersModal: function() {
    var self = this;
    var modalInstance = self.$modal.open({
      templateUrl: 'projects/users-modal.html',
      controller: 'ProjectUsersController',
      resolve: {
        /**@ngInject*/
        project: function(ProductCategory) {
          return self.project;
        }
      }
    });
  },

  openAddServicesModal: function() {
    var modalInstance = this.$modal.open({
      templateUrl: 'projects/add-services-modal.html',
      controller: 'ProjectServicesController as projectServicesCtrl',
      size: 'lg',
      resolve: {
        /**@ngInject*/
        categories: function(ProductCategory) {
          return ProductCategory.query().$promise;
        },
        /**@ngInject*/
        products: function(Product) {
          return Product.query({"includes[]": ["cloud"]}).$promise;
        }
      }
    });
  },

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
      'total' : projectBudget,
      'used'    : usedBudget,
      'usedPercent' : usedPercent
    };
  }
};

module.exports = ProjectController;
