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
      $scope.showGrid = function() {
        $element.find('div.list-view').removeClass('list-view').addClass('grid-view');
      };
      $scope.showList = function() {
        $element.find('div.grid-view').removeClass('grid-view').addClass('list-view');
      }
    }
  };
};

module.exports = SectionHeaderDirective;
