'use strict';

var _ = require('lodash');

/**@ngInject*/
var OrdersController = function(orderData, projects, products) {

  _.each(orderData.order_items, function(order, id) {

    orderData.order_items[id].project = _.find(projects, function(project) {
      return project.id == order.project_id;
    });

    orderData.order_items[id].product = _.find(products, function(product) {
      return product.id == order.product_id;
    });

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
  },
  // @todo Probably not the best for performance to load all the products to get the names for just a few of them.
  //       Should probably be resolved server side (and not nested, separated out into it's own resource to prevent duplication).
  /**@ngInject*/
  products: function(ProductResource) {
    return ProductResource.query().$promise;
  }

};

module.exports = OrdersController;