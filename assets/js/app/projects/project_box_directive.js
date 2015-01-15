'use strict';

/**@ngInject*/
var ProjectBoxDirective = function() {
  return {
    restrict: 'E',
    templateUrl: '/partials/projects/project_box.html',
    transclude: true,
    scope: {
      project: "="
    }
  };
};

module.exports = ProjectBoxDirective;
