'use strict';

/**@ngInject*/
function DashboardController($scope, alerts, currentUser) {
  this.$scope = $scope;
  this.alerts = alerts;

  $scope.tab = "projects";
  $scope.currentUser = currentUser;
}

DashboardController.prototype.showTab = function(tab) {
  this.$scope.tab = tab;
};

DashboardController.resolve = {

};

module.exports = DashboardController;