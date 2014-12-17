'use strict';

var _ = require('lodash');

/**@ngInject*/
var LeftSidebarController = function($scope, currentUser) {
  $scope.currentUser = currentUser;

};

module.exports = LeftSidebarController;

