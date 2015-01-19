'use strict';

/**@ngInject*/
var SectionHeaderDirective = function() {
  return {
    restrict: 'E',
    templateUrl: '/partials/common/section_header.html',
    transclude: true,
    scope: {
      name: '@',
      description: '@',
      allowViewTypeToggle: '@',
      viewType: '@'
    },
    link: function($scope, $element) {

      // Default to not allowing the view type toggle.
      $scope.allowViewTypeToggle = $scope.allowViewTypeToggle || false;

      // Default to grid view.
      $scope.currentViewType = $scope.viewType || 'grid-view';

      $scope.showGrid = function() {
        $scope.currentViewType = 'grid-view';
      };

      $scope.showList = function() {
        $scope.currentViewType = 'list-view';
      };
    }
  };
};

module.exports = SectionHeaderDirective;
