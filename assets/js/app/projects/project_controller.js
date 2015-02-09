'use strict';

var _ = require('lodash');

/**@ngInject*/
function ProjectController($scope, $interval, project, ProjectUsersResource, OrderItemsResource, alerts, products) {

  this.intervalDelay = 30000;

  this.$interval = $interval;

  this.project = project;
  // Filter the alerts to only show them for this project.
  this.alerts = _.filter(alerts, function(alert) {
    return alert.project_id == project.id;
  });
  this.products = products;

  this.ProjectUsersResource = ProjectUsersResource;
  this.OrderItemsResource = OrderItemsResource;

  /**
   * On creation/transition to scope, start refresh interval if
   * we need to to reload unfinished service data.
   *
   * TODO : Revisit the data refresh
   */
  //$scope.$on('$stateChangeSuccess', _.bind(function () {
  //  this.stopRefreshInterval();
  //}, this));
  //
  //$scope.$on('$stateChangeStart', _.bind(function() {
  //  this.startRefreshInterval();
  //}, this));
}

ProjectController.resolve = {
  /**@ngInject*/
  project: function(ProjectsResource, $stateParams) {
    return ProjectsResource.get({id: $stateParams.projectId}).$promise;
  },
  /**@ngInject*/
  products: function(ProductsResource) {
    return ProductsResource.query({"includes[]": ["cloud"]}).$promise;
  }
};

ProjectController.prototype = {

  /**
   * Setup refresh interval if not all services are complete.
   * Will automatically stop polling after all services are complete.
   * Polls Every 30 Seconds.
   */
  startRefreshInterval: function() {
    var self = this;
    if (!self._areAllServicesComplete()) {
      self.interval = this.$interval(function() {
        self.project.$get(function() {
          if (self._areAllServicesComplete()) {
            self.stopRefreshInterval();
          }
        });
      }, this.intervalDelay);
    }
  },

  /**
   * Clear/Stop the polling.
   */
  stopRefreshInterval: function() {
    this.$interval.cancel(this.interval);
    this.interval = undefined;
  },

  removeUserFromProject: function(index){
    this.ProjectUsersResource.delete({id: this.project.id, staff_id: this.project.users[index].id}).$promise.then(
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

    this.OrderItemsResource.delete({id: service.id, order_id: service.order_id}).$promise.then(
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

  /**
   * Links the service with the product.
   * @param serviceObject
   * @returns {*}
   */
  getServiceWithProduct: function(serviceObject) {
    var productId = serviceObject.product_id;

    var product = _.find(this.products, function(obj) {
      return obj.id == productId;
    });

    // Hook on the product details we need to use the product box.
    serviceObject.img = product.img;
    serviceObject.name = product.name;
    serviceObject.cloud = product.cloud;
    serviceObject.description = product.description;

    return serviceObject;
  },

  getLeftData: function() {
    var projectBudget = this.project.budget || 0;
    var projectSpent = this.project.spent || 0;
    var monthlySpend = this.project.monthly_spend || 0;

    var leftPercent = 1.0;
    var leftMonths = '>12';
    var leftColor = 'green';

    if (projectBudget > 0) {

      leftMonths = (projectBudget - projectSpent) / 12;
      leftPercent = leftMonths / 12;

      if (leftMonths > 12) {
        leftMonths = '>12';
        leftPercent = 1.0;
      } else if (leftMonths <= 5 && leftMonths > 3) {
        leftColor = '#CCDB23';
      } else if (leftMonths <=3 && leftMonths > 0) {
        leftColor = 'red';
      } else if (leftMonths <= 0) {
        leftMonths = 0;
        leftPercent = 0.0;
        leftColor = 'red';
      }

    }

    return {
      'leftPercent': leftPercent,
      'leftColor': leftColor,
      'leftMonths': leftMonths,
      'monthlySpend': monthlySpend
    };
  },

  getBudgetData: function() {
    var projectBudget = this.project.budget || 0;
    var projectSpent = this.project.spent || 0;
    var usedPercent = 0.0;
    var usedColor = 'green';

    if (projectBudget > 0) {

      usedPercent = projectSpent / projectBudget;
      if (usedPercent > 1.0) {
        usedPercent = 1.0;
      }

      // Set the colors for usedAmount
      if (usedPercent <= 0.85 && usedPercent > 0.65) {
        usedColor = '#CCDB23';
      } else if (usedPercent >= 0.85) {
        usedColor = 'red';
      }

    }

    return {
      'total':       projectBudget,
      'used':        projectSpent,
      'usedPercent': usedPercent,
      'usedColor': usedColor
    };
  },

  /**
   * Loops through the resolved order history on the project
   * If any of these orders are not completed, we return false.
   * A completed order is currently equivalent to a service.
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
