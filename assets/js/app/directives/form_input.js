'use strict';

/**@ngInject*/
function FormInput() {
    return {
        restrict: 'E',
        templateUrl: '/partials/common/form-input.html',
        scope: {
            fieldModel: "=fieldModel",
            fieldType: "=fieldType",
            fieldRequired: "=fieldRequired",
            fieldId: "=fieldId",
            fieldName: "=fieldName",
            label: "=label",
            helpText: "=helpText"
        },
        controller: [ '$scope', function ($scope) {
            $scope.dateOpened = [];

            $scope.openDate = function($event, index) {
                $event.preventDefault();
                $event.stopPropagation();
                $scope.answerDateOpened[index] = [];
                $scope.answerDateOpened[index] = true;
            };

            $scope.dateOptions = {
                formatYear: 'yy',
                startingDay: 1
            };

            $scope.format = 'yyyy-MM-dd';
        }]
    };
}

module.exports = FormInput;