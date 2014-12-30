'use strict';

/**@ngInject*/
function ServiceController($scope, $sce, service, viewValues) {
  this.$scope = $scope;

  $scope.service = service;
  $scope.viewValues = viewValues;
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
  },
  /**@ngInject*/
  viewValues: function(DataService) {
    return DataService.getMarketplaceValues().$promise;
  }
};

module.exports = ServiceController;

