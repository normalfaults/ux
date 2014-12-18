'use strict';

/**@ngInject*/
function EditProjectQuestionController($scope, $state, projectQuestion, ProjectQuestion) {
    $scope.projectQuestion = projectQuestion;

    $scope.addOption = function() {
        $scope.projectQuestion.options.push('');
    }

    $scope.createProjectQuestion = function(){
        if ($scope.projectQuestionForm.$valid) {
            var filteredProjectQuestion = _.omit($scope.projectQuestion, 'created_at', 'updated_at', 'deleted_at', 'id'),
                updatedProjectQuestion = filteredProjectQuestion.options ? filteredProjectQuestion : _.omit(filteredProjectQuestion, 'options');

            ProjectQuestion.update({id: $scope.projectQuestion.id, project_question: updatedProjectQuestion} , function() {
                $state.go('base.admin.projects.project_questions', {}, {reload: true});
            });
        }
    }


    $scope.$watch('projectQuestion.field_type', function(newType, lastType) {
        if(newType != lastType && newType === 'select_option') {
            $scope.projectQuestion.options = [''];
        } else if(newType != lastType && $scope.projectQuestion.options) {
            $scope.projectQuestion.options = null;
        }
    });
}

EditProjectQuestionController.resolve = {
    /**@ngInject*/
    projectQuestion: function(ProjectQuestion, $stateParams) {
        return ProjectQuestion.get({id: $stateParams.id}).$promise;
    }
};

module.exports = EditProjectQuestionController;