'use strict';

/**@ngInject*/
var ProjectsServicesController = function($scope, $modalInstance, $q, $state, ProjectUser, ApiResource) {

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };

};

module.exports = ProjectsServicesController;