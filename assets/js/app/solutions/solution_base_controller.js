'use strict';

/**@ngInject*/
function SolutionBaseController($scope, solutions) {
  var self = this;

  this.$scope = $scope;

  solutions.$promise.then(function() {
    var solution = solutions[0];

    self.$scope.solutions = solutions;
    self.$scope.solution = solutions[0];
    self.$scope.selectedStatistic = solution.statistics[0];

    //$scope.selectInterval = function(stats) {
    //  $scope.selectedStatistic = stats;
    //};
    //$scope.showSolution = function(solution) {
    //  $scope.solution = solution;
    //  $scope.selectedStatistic = solution.statistics[0];
    //};
  });
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
