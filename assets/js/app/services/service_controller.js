'use strict';

/**@ngInject*/
function ServiceController($scope, service) {
  this.service = service;
}

ServiceController.prototype = {

};

ServiceController.resolve = {
  /**@ngInject*/
  service: function(OrderItemResource, $stateParams) {
    return OrderItemResource.get({order_id: $stateParams.order_id, id: $stateParams.id}).$promise;
  }
};

module.exports = ServiceController;

