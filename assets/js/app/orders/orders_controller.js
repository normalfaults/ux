'use strict';

/**@ngInject*/
var OrdersController = function(orderData) {

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