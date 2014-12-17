'use strict';

/**@ngInject*/
function NewProjectQuestionController($scope, $state, ProjectQuestion) {
    var scope = $scope,
        state = $state;

    $scope.newProjectQuestion = {}

    $scope.addOption = function() {
        scope.newProjectQuestion.options.push('')
    }

    $scope.$watch('newProjectQuestion.field_type', function(newType, lastType) {
        if(newType != lastType && newType === 'select_option') {
            $scope.newProjectQuestion.options = ['']
        } else if(newType != lastType && scope.newProjectQuestion.options) {
            delete scope.newProjectQuestion[options]
        }
    });

    $scope.createProjectQuestion = function(){
        if (scope.projectQuestionForm.$valid) {

            ProjectQuestion.save(scope.newProjectQuestion, function() {
                state.go('base.admin.projects.project_questions', {}, {reload: true});
            });
        }
    }
}

module.exports = NewProjectQuestionController;