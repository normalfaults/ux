'use strict';

/**@ngInject*/
function NewProjectController($scope, $state, DataService, projectQuestions) {
  var self = this;

  this.$scope = $scope;
  this.$state = $state;
  this.DataService = DataService;

  $scope.createProject = function() {
    self.DataService.createProject({project: self.$scope.project}).$promise.then(function(){
      self.$state.go('base.dashboard', {}, {reload: true});
    });
  };

  $scope.project = $scope.project || {};
  $scope.questions = projectQuestions;
}

NewProjectController.resolve = {
  /**@ngInject*/
  projectQuestions: function(DataService) {
    //todo: move this to a project questions resource.
    return DataService.getProjectQuestions().$promise;
  }
};

module.exports = NewProjectController;