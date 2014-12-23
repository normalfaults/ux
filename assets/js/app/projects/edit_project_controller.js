'use strict';

var _ = require('lodash');

/**@ngInject*/
function EditProjectController($scope, $state, ProjectResource, project, projectQuestions) {
    $scope.project = project;
    $scope.questions = projectQuestions;

    $scope.updateProject = function() {
        var filteredProject = _.omit($scope.project, 'created_at', 'updated_at', 'deleted_at', 'id', 'services', 'domain',
            'url', 'state', 'state_ok', 'problem_count', 'account_number', 'resources', 'icon', 'cpu', 'hdd', 'ram',
            'status', 'users', 'order_history', 'description', 'cc', 'staff_id', 'approved', 'img', 'project_answers');

        if ($scope.project.project_answers.length > 0) {
            filteredProject.project_answers  = _.reduce($scope.project.project_answers,
                function(pas, pa){ pas.push(_.omit(pa, 'id', 'project_id', 'created_at', 'updated_at',
                    'project_question')); return pas;}, []);
        }

        ProjectResource.update({id: $scope.project.id, project: filteredProject} , function() {
            $state.go('base.dashboard', {}, {reload: true});
        });
    };
}

EditProjectController.resolve = {
    /**@ngInject*/
    projectQuestions: function(DataService) {
        //todo: move this to a project questions resource.
        return DataService.getProjectQuestions().$promise;
    },
    /**@ngInject*/
    project: function(ProjectResource, $stateParams) {
        return ProjectResource.get({id: $stateParams.id}).$promise;
    }
};

module.exports = EditProjectController;
