'use strict';

/**@ngInject*/
function MarketplaceController($scope, $filter, services, viewValues) {
  $scope.applicationServices = $filter('filter')(services, {isApplication: true});
  $scope.webServices = $filter('filter')(services, {isWebService: true});
  $scope.blueprintServices = $filter('filter')(services, {isBlueprint: true});
  $scope.services = services;
  $scope.viewValues = viewValues;
}

MarketplaceController.resolve = {
  /**@ngInject*/
  viewValues: function(DataService) {
    return DataService.getMarketplaceValues().$promise;
  },
  /**@ngInject*/
  services: function(Service) {
    return Service.query().$promise;
  }
};

module.exports = MarketplaceController;
