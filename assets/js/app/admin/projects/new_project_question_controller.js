'use strict';

/**@ngInject*/
function NewProjectQuestionController($scope, $state, ProjectQuestion) {
    $scope.projectQuestion = {}

    $scope.addOption = function() {
        $scope.projectQuestion.options.push('')
    }

    $scope.$watch('projectQuestion.field_type', function(newType, lastType) {
        if(newType != lastType && newType === 'select_option') {
            $scope.projectQuestion.options = [''];
        } else if(newType != lastType && $scope.projectQuestion.options) {
            $scope.projectQuestion.options = null;
        }
    });

    $scope.createProjectQuestion = function(){
        if ($scope.projectQuestionForm.$valid) {
            ProjectQuestion.save($scope.projectQuestion.options ? $scope.projectQuestion : _.omit($scope.projectQuestion, 'options'), function() {
                $state.go('base.admin.projects.project_questions', {}, {reload: true});
            });
        }
    }
}

module.exports = NewProjectQuestionController;