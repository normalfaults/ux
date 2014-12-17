'use strict';

/**@ngInject*/
function NewProjectQuestionController($scope, $state, ProjectQuestion) {
    $scope.newProjectQuestion = {}

    $scope.addOption = function() {
        $scope.newProjectQuestion.options.push('')
    }

    $scope.$watch('newProjectQuestion.field_type', function(newType, lastType) {
        if(newType != lastType && newType === 'select_option') {
            $scope.newProjectQuestion.options = ['']
        } else if(newType != lastType && $scope.newProjectQuestion.options) {
            $scope.newProjectQuestion.options = null
        }
    });

    $scope.createProjectQuestion = function(){

        if ($scope.projectQuestionForm.$valid) {
            ProjectQuestion.save($scope.newProjectQuestion.options ? $scope.newProjectQuestion : _.omit($scope.newProjectQuestion, 'options'), function() {
                $state.go('base.admin.projects.project_questions', {}, {reload: true});
            });
        }
    }
}

module.exports = NewProjectQuestionController;