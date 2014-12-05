'use strict';

/**@ngInject*/
function ManageController($scope, recentOrders, recentUsers, manageValues, alerts) {
  $scope.recentOrders = recentOrders;
  $scope.alerts = alerts;
  $scope.recentUsers = recentUsers;
  $scope.manageValues = manageValues;
}

module.exports = ManageController;
