'use strict';

/**@ngInject*/
function DashboardController($scope, alerts) {
  this.$scope = $scope;

  $scope.tab = "projects";
  $scope.alerts = alerts;
}

DashboardController.prototype.showTab = function(tab) {
  var self = this;

  self.$scope.tab = tab;
};

DashboardController.resolve = {
  /**@ngInject*/
  alerts: function(DataService) {
    return DataService.getAlerts();
  }
};

module.exports = DashboardController;
