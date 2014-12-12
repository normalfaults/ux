'use strict';

/**@ngInject*/
function ProjectUsersController($scope, $modalInstance, DataService) {


    $scope.ok = function () {
        $modalInstance.close();
    };

    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };
}

module.exports = ProjectUsersController;