'use strict';

/**@ngInject*/
function EditSettingsController($scope, $state, adminSettings, AdminSetting) {
    $scope.adminSettings = adminSettings;
    $scope.updating = false;
    $scope.updateSetting = function(setting) {
        $scope.updating = true;
        setting.$update(function() {
            $scope.updating = false;
        }, function() {
            $scope.updating = false;
            alert("There was an error updating this setting. Please try again.")
        });
    }
}

EditSettingsController.resolve = {
    /**@ngInject*/
    adminSettings: function(AdminSetting) {
        return AdminSetting.query().$promise;
    }
};

module.exports = EditSettingsController;