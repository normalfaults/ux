'use strict';

/**@ngInject*/
function ProjectQuestionsController($scope, $state, projectQuestions, ProjectQuestion) {
    var scope = $scope,
        state = $state;

    $scope.projectQuestions = projectQuestions
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

    $scope.deleteProjectQuestion = function(question){
        question.$delete(function() {
            state.go('base.admin.projects.project_questions', {}, {reload: true});
        });
    }
}


ProjectQuestionsController.resolve = {
    /**@ngInject*/
    projectQuestions: function(ProjectQuestion) {
        return ProjectQuestion.query().$promise;
    }
};

module.exports = ProjectQuestionsController;