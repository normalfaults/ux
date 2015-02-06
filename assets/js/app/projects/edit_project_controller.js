'use strict';

var _ = require('lodash');

/**@ngInject*/
function EditProjectController($scope, $state, ProjectsResource, project, projectQuestions) {
    $scope.project = project;
    $scope.questions = projectQuestions;

    $scope.updateProject = function() {
        var filteredProject = _.omit($scope.project, 'created_at', 'updated_at', 'deleted_at', 'services', 'domain',
            'url', 'state', 'state_ok', 'problem_count', 'account_number', 'resources', 'icon', 'cpu', 'hdd', 'ram',
            'status', 'users', 'order_history', 'cc', 'staff_id', 'approved', 'project_answers');

        if ($scope.project.project_answers.length > 0) {
            filteredProject.project_answers  = _.reduce($scope.project.project_answers,
                function(pas, pa){ pas.push(_.omit(pa, 'project_id', 'created_at', 'updated_at',
                    'project_question')); return pas;}, []);
        }

        ProjectsResource.update(filteredProject , function() {
            $state.go('base.project.view', {projectId: project.id}, {reload: true});
        });
    };
}

EditProjectController.resolve = {
    /**@ngInject*/
    projectQuestions: function(ProjectQuestionsResource) {
        return ProjectQuestionsResource.query().$promise;
    }
};

module.exports = EditProjectController;
