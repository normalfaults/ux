'use strict';

var angular = require('angular');

/**@ngInject*/
var ProjectBoxDirective = function() {
  return {
    restrict: 'E',
    templateUrl: '/partials/projects/project_box.html',
    transclude: true,
    scope: {
      project: "="
    },
    link: function($scope) {
      $scope.sref = "base.project.view(" + angular.toJson({projectId: $scope.project.id}) + ")";
    }
  };
};

module.exports = ProjectBoxDirective;
