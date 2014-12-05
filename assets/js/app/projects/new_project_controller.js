'use strict';

/**@ngInject*/
function NewProjectController($scope, $state, DataService, projectQuestions) {
  var self = this;

  this.$scope = $scope;
  this.$state = $state;
  this.DataService = DataService;

  $scope.project = $scope.project || {};

  _.each(projectQuestions, function(pQuestion){
    self.$scope.project.project_answers = self.$scope.project.project_answers || [];
    self.$scope.project.project_answers.push({
      project_question_id: pQuestion.id,
      project_question: pQuestion
    })
  });
}

NewProjectController.prototype.createProject = function() {
  var self = this;

  self.DataService.createProject({project: self.$scope.project}).$promise.then(function(){
    self.$state.go('base.solutionBase.dashboard', {}, {reload: true});
  });
};

NewProjectController.resolve = {
  /**@ngInject*/
  projectQuestions: function(DataService) {
    return DataService.getProjectQuestions().$promise;
  }
};

module.exports = NewProjectController;
