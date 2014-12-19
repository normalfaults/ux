'use strict';

/**@ngInject*/
function EditProjectQuestionController($scope, $state, projectQuestion, ProjectQuestion) {
    $scope.projectQuestion = projectQuestion;

    $scope.submitProject = function(){
        var filteredProjectQuestion = _.omit($scope.projectQuestion, 'created_at', 'updated_at', 'deleted_at', 'id'),
            updatedProjectQuestion = filteredProjectQuestion.options ? filteredProjectQuestion : _.omit(filteredProjectQuestion, 'options');

        ProjectQuestion.update({id: $scope.projectQuestion.id, project_question: updatedProjectQuestion} , function() {
            $state.go('base.admin.projects.project_questions', {}, {reload: true});
        });
    }
}

EditProjectQuestionController.resolve = {
    /**@ngInject*/
    projectQuestion: function(ProjectQuestion, $stateParams) {
        return ProjectQuestion.get({id: $stateParams.id}).$promise;
    }
};

module.exports = EditProjectQuestionController;