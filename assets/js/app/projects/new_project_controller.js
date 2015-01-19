'use strict';

/**@ngInject*/
var NewProjectController = function($scope, $state, ProjectsResource, projectQuestions) {

  // @todo These should be moved to newProjectCtrl style instead of using scope.
  $scope.project = $scope.project || {};
  $scope.questions = projectQuestions;


  $scope.createProject = function() {
    ProjectsResource.save($scope.project).$promise.then(function(project){
      $state.go('base.project.view', {projectId: project.id});
    });
  };
};

NewProjectController.resolve = {
  /**@ngInject*/
  projectQuestions: function(ProjectQuestionsResource) {
    return ProjectQuestionsResource.query().$promise;
  }
};

module.exports = NewProjectController;