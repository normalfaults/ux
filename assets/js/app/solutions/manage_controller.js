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
    return Order.getRecentOrders().$promise;
  },
  /**@ngInject*/
  recentUsers: function(User) {
    return User.getRecentUsers().$promise;
  },
  /**@ngInject*/
  manageValues: function(DataService) {
    return DataService.getManageValues().$promise;
  },
  /**@ngInject*/
  alerts: function(DataService) {
    return DataService.getAlerts().$promise;
  }
};

module.exports = ManageController;
