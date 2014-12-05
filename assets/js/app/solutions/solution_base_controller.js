'use strict';

/**@ngInject*/
function SolutionBaseController($scope, solutions) {
  var self = this;

  this.$scope = $scope;

  $scope.solutions = solutions;
  $scope.solution = solutions[0];
  $scope.selectedStatistic = $scope.solution.statistics[0];
}

SolutionBaseController.prototype.selectInterval = function(stats) {
  var self = this;

  self.$scope.selectedStatistic = stats;
};

SolutionBaseController.prototype.showSolution = function(solution) {
  var self = this;

  self.$scope.solution = solution;
  self.$scope.selectedStatistic = solution.statistics[0];
};

module.exports = SolutionBaseController;
