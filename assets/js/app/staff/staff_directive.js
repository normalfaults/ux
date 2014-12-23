'use strict';

/**@ngInject*/
function StaffDirective() {
    return {
        restrict: 'E',
        templateUrl: '/partials/staff/staff.html',
        scope: {
            staff: "=staff",
            format: "=format",
            project: "=project",
            afterRemovalFromProject: "&"
        },
        controller: [ '$scope', 'Staff', function ($scope, Staff) {
            $scope.removeFromProject = function() {
                if ($scope.staff && $scope.project) {
                    Staff.removeProjectFromStaff({
                        id: $scope.staff.id,
                        project_id: $scope.project.id
                    }).$promise.then(function () {
                        if ($scope.afterRemovalFromProject) {
                            $scope.afterRemovalFromProject();
                        }
                    });
                } else {
                    alert("Please provide a staff and project reference to remove projects from a staff member.");
                }
            }
        }]
    };
}

module.exports = StaffDirective;