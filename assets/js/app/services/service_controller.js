'use strict';

var _ = require('lodash');

/**@ngInject*/
function ServiceController(service, OrderItemsResource) {
  this.service = service;

  this.OrderItemsResource = OrderItemsResource;
}

ServiceController.prototype = {

  startService: function() {
    this.OrderItemsResource.startService({order_id: this.service.order_id, id: this.service.id});
  },

  stopService: function() {
    this.OrderItemsResource.stopService({order_id: this.service.order_id, id: this.service.id});
  },

  getLogs: function() {

  }

};

ServiceController.resolve = {
  /**@ngInject*/
  service: function($stateParams, $q, projects, OrderItemsResource, ProductsResource) {

    var deferred = $q.defer();
    var orderItemData = {};

    OrderItemsResource.get({order_id: $stateParams.order_id, id: $stateParams.id}).$promise.then(function(orderItem) {

      orderItemData = orderItem;

      // Add on the project.
      orderItemData.project = _.find(projects, function(project) {
        return project.id == orderItem.project_id;
      });

      // Add on the product.
      ProductsResource.get({id: orderItem.product_id}).$promise.then(function(product) {
        orderItemData.product = product;
        deferred.resolve(orderItemData);
      });

    });

    return deferred.promise;
  }
};

module.exports = ServiceController;

