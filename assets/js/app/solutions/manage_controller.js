'use strict';

/**@ngInject*/
function ManageController($scope, recentOrders, recentUsers, manageValues, alerts) {
  $scope.recentOrders = recentOrders;
  $scope.alerts = alerts;
  $scope.recentUsers = recentUsers;
  $scope.manageValues = manageValues;
}

ManageController.resolve = {
  /**@ngInject*/
  recentOrders: function(Order) {
    return Order.getRecentOrders();
  },
  /**@ngInject*/
  recentUsers: function(User) {
    return User.getRecentUsers();
  },
  /**@ngInject*/
  manageValues: function(DataService) {
    return DataService.getManageValues();
  },
  /**@ngInject*/
  alerts: function(DataService) {
    return DataService.getAlerts();
  }
};

module.exports = ManageController;
