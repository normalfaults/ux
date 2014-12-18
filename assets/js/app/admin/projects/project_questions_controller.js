'use strict';

/**@ngInject*/
function ProjectQuestionsController($scope, $state, projectQuestions, ProjectQuestion) {
    $scope.projectQuestions = projectQuestions
    $scope.projectQuestion = {}

    $scope.addOption = function() {
        $scope.projectQuestion.options.push('')
    }

    $scope.$watch('projectQuestion.field_type', function(newType, lastType) {
        if(newType != lastType && newType === 'select_option') {
            $scope.projectQuestion.options = [''];
        } else if(newType != lastType && $scope.projectQuestion.options) {
            delete $scope.projectQuestion[options];
        }
    });

    $scope.createProjectQuestion = function(){
        if (scope.projectQuestionForm.$valid) {
            ProjectQuestion.save($scope.projectQuestion, function() {
                $state.go('base.admin.projects.project_questions', {}, {reload: true});
            });
        }
    }

    $scope.deleteProjectQuestion = function(question){
        question.$delete(function() {
            $state.go('base.admin.projects.project_questions', {}, {reload: true});
        });
    }

    $scope.editProjectQuestion = function(question){
        $state.go('base.admin.projects.edit_project_questions', {id: question.id}, {reload: true});
    }
}

ProjectQuestionsController.resolve = {
    /**@ngInject*/
    projectQuestions: function(ProjectQuestion) {
        return ProjectQuestion.query().$promise;
    }
};

module.exports = ProjectQuestionsController;