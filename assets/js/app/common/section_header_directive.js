'use strict';

/**@ngInject*/
var SectionHeaderDirective = function() {
  return {
    restrict: 'E',
    templateUrl: '/partials/common/section_header.html',
    transclude: true,
    scope: {
      header: '=',
      hideEmpty: '=',
      allowViewTypeToggle: '=',
      viewType: '@'
    },
    link: function($scope, $element) {
      $scope.currentViewType = 'grid-view';

      $scope.showGrid = function() {
        $scope.currentViewType = 'grid-view';
      };
      $scope.showList = function() {
        $scope.currentViewType = 'list-view';
      }
    }
  };
};

module.exports = SectionHeaderDirective;
