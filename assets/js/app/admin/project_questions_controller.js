'use strict';

function ProjectQuestionsController($scope, projectQuestions) {
    $scope.projectQuestions = projectQuestions
}

ProjectQuestionsController.resolve = {
    /**@ngInject*/
    projectQuestions: function(ProjectQuestion) {
        return ProjectQuestion.query().$promise;
    }
};

module.exports = ProjectQuestionsController;