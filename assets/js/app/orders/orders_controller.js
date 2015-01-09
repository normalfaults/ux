'use strict';

var _ = require('lodash');

/**@ngInject*/
var OrdersController = function(orderData, projects) {

  _.each(orderData.order_items, function(order, id) {

    orderData.order_items[id].project = _.find(projects, function(project) {
      return project.id == order.project_id;
    });

    orderData.order_items[id].product = {};

  });


  this.order = orderData;
};

OrdersController.prototype = {

};

OrdersController.resolve = {
  /**@ngInject*/
  orderData: function($stateParams, $q, OrderResource, UsersResource) {

    var deferred = $q.defer();
    var orderData = {};

    OrderResource.get({id: $stateParams.id}).$promise.then(function(order) {

      orderData = order;

      UsersResource.get({id: order.staff_id}).$promise.then(function(user) {
        orderData.staff = user;
        deferred.resolve(orderData);
      })

    });

    return deferred.promise;
  }

};

module.exports = OrdersController;