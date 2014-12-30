'use strict';

var _ = require('lodash');

/**@ngInject*/
function ProjectController($scope, $modal, project, ProjectUserResource, OrderItemResource, alerts) {

  this.project = project;
  this.$modal = $modal;
  this.alerts = alerts;
  this.ProjectUserResource = ProjectUserResource;
  this.OrderItemResource = OrderItemResource;

  /**
   * On creation/transition to scope, start refresh interval if
   * we need to to reload unfinished service data.
   */
  $scope.$on('$stateChangeSuccess', _.bind(function () {
    this.startRefreshInterval();
  }, this));

  $scope.$on('$stateChangeStart', _.bind(function() {
    this.stopRefreshInterval();
  }, this));
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

  /**
   * Setup refresh interval if not all services are complete.
   * Will automatically stop polling after all services are complete.
   * Polls Every 30 Seconds.
   */
  startRefreshInterval: function() {
    if (!this._areAllServicesComplete()) {
      this.interval = window.setInterval(_.bind(function () {
        this.project.$get().then(_.bind(function () {

          if (this._areAllServicesComplete()) {
            this.stopRefreshInterval();
          }
        }, this));
      }, this), 30000);
    }

  },

  /**
   * Clear/Stop the polling.
   */
  stopRefreshInterval: function() {
    window.clearInterval(this.interval);
  },

  removeUserFromProject: function(index){
    this.ProjectUserResource.delete({id: this.project.id, staff_id: this.project.users[index].id}).$promise.then(
      _.bind(function(data){
        this.project.users.splice(index, 1);
      }, this),
      function(error) {
        // @todo This should be handled more globally than disruptive alerts.
        alert("There was an error removing this user. Please try again later");
      }
    );
  },

  removeServiceFromProject: function(serviceIndex) {
    var service = this.project.services[serviceIndex];

    this.OrderItemResource.delete({id: service.id, order_id: service.order_id}).$promise.then(
      _.bind(function() {
        // Remove it from the existing array.
        this.project.services.splice(serviceIndex, 1);
      }, this),
      function(error) {
        // @todo This should be handled more globally than disruptive alerts.
        alert("There was an error removing this service.");
      }
    );
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
      'total':       projectBudget,
      'used':        usedBudget,
      'usedPercent': usedPercent
    };
  },

  /**
   * Loops through the resolved order history on the project
   * If any of these orders are not completed, we return false.
   * A completed order is currently equivelent to a service.
   *
   * @private
   */
  _areAllServicesComplete: function() {

    // This short circuits on the first non complete item.
    var anyNotComplete = _.some(this.project.services, function(item, key) {
      // @todo Who nows if this will be the final status.
      return item.provision_status !== 'Complete';
    });

    // We return the reverse here.
    // Are all services complete
    return !anyNotComplete;

  }
};

module.exports = ProjectController;
