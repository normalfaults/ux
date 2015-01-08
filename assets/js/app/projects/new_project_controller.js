'use strict';

/**@ngInject*/
var NewProjectController = function($scope, $state, ProjectResource, projectQuestions) {

  // @todo These should be moved to newProjectCtrl style instead of using scope.
  $scope.project = $scope.project || {};
  $scope.questions = projectQuestions;


  $scope.createProject = function() {
    ProjectResource.save($scope.project).$promise.then(function(project){
      $state.go('base.project', {projectId: project.id});
    });
  };
};

NewProjectController.resolve = {
  /**@ngInject*/
  projectQuestions: function(DataService) {
    //todo: move this to a project questions resource.
    return DataService.getProjectQuestions().$promise;
  }
};

module.exports = NewProjectController;