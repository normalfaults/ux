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

  $scope.todayEndDate = function() {
    $scope.project.end_date = new Date();
  };

  $scope.todayEndDate();

  $scope.todayStartDate = function() {
    $scope.project.start_date = new Date();
  };

  $scope.todayStartDate();

  $scope.clearStartDate = function () {
    $scope.project.start_date = null;
  };

  $scope.clearEndDate = function () {
    $scope.project.end_date = null;
  };

  $scope.startDateOpened = false;
  $scope.endDateOpened = false;

  $scope.openStartDate = function($event) {
    $event.preventDefault();
    $event.stopPropagation();
    $scope.endDateOpened = false;
    $scope.startDateOpened = true;
  };

  $scope.openEndDate = function($event) {
    $event.preventDefault();
    $event.stopPropagation();
    $scope.startDateOpened = false;
    $scope.endDateOpened = true;
  };

  $scope.dateOptions = {
    formatYear: 'yy',
    startingDay: 1
  };

  $scope.formats = ['yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate', 'dd-MMMM-yyyy' ];
  $scope.format = $scope.formats[0];
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
