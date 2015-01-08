'use strict';

/**@ngInject*/
function ServiceController($scope, $sce, service) {
  this.$scope = $scope;

  $scope.service = service;
  $scope.tab = "feature";

  service.feature = $sce.trustAsHtml(service.feature);
  service.specification = $sce.trustAsHtml(service.specification);
  service.review = $sce.trustAsHtml(service.review);
}

ServiceController.prototype.setTab = function(tab) {
  var self = this;

  self.$scope.tab = tab;
};

ServiceController.resolve = {
  /**@ngInject*/
  service: function(ServiceResource, $stateParams) {
    return ServiceResource.get({id: $stateParams.serviceId}).$promise;
  }
};

module.exports = ServiceController;

