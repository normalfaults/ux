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

module.exports = DashboardController;
