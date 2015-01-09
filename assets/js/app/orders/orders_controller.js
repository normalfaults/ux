'use strict';

/**@ngInject*/
var OrdersController = function(orders) {

  this.orders = orders;
  
};

OrdersController.prototype = {

};

OrdersController.resolve = {
  /**@ngInject*/
  orders: function(OrderResource, $stateParams) {
    return OrderResource.get({id: $stateParams.id}).$promise;
  }

};

module.exports = OrdersController;