'use strict';

/**@ngInject*/
function ProjectUsersController($scope, $modalInstance, $q, $state, ProjectUser, ApiResource) {
    var self = this

    self.scope = $scope
    self.modalInstance = $modalInstance
    self.q = $q
    self.state = $state

    $scope.searchURL = ApiResource("staffSearch");
    $scope.search = ""
    $scope.userAdditons = {};
    $scope.userAdditonCount = 0;
    $scope.updateing = false

    $scope.$watch('lastSelected', function(newUser, lastUser) {
        if(newUser && newUser != lastUser) {
            self.scope.userAdditons[newUser.originalObject.email] = newUser
            self.scope.userAdditonCount = Object.keys($scope.userAdditons).length
        }
    });

    $scope.cancel = function () {
        self.modalInstance.dismiss('cancel');
    };

    //todo: move the following methods to the controller prototype.

    $scope.ok = function ($event) {

        var criticalError = false,
            duplicateRecord = false,
            userInserts = [];

        self.scope.updateing = true

        userInserts = _.map(Object.keys($scope.userAdditons), function(key) {
            var user = self.scope.userAdditons[key].originalObject,
                promise = ProjectUser.addUserToProject({id: 2, staff_id: user.id}).$promise.then(
                    function(data){
                    }, function(error){
                        if(error.data.error === "Duplicate record.") {
                            duplicateRecord = true
                        } else {
                            criticalError = true
                        }
                    });

            return promise;
        });

        self.q.all(userInserts).finally(function() {
            self.scope.updateing = false

            if (criticalError) {
                alert("There was a problem adding these users. Please try again.");
            }

            self.modalInstance.close();
            self.state.go('base.project', {}, {reload: true});
        });
    };

    $scope.removeUser = function(email) {
        delete self.scope.userAdditons[email]
        self.scope.userAdditonCount = Object.keys(self.scope.userAdditons).length
    }
}

module.exports = ProjectUsersController;