'use strict';

/**@ngInject*/
function DashboardController($scope, alerts, currentUser) {
  this.$scope = $scope;

  $scope.tab = "projects";
  $scope.alerts = alerts;
  $scope.currentUser = currentUser;
}

DashboardController.prototype.showTab = function(tab) {
  var self = this;

  self.$scope.tab = tab;
};

DashboardController.resolve = {
  /**@ngInject*/
  alerts: function(DataService) {
    return DataService.getAlerts().$promise;
  }
};

module.exports = DashboardController;