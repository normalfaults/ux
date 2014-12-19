'use strict';

/**@ngInject*/
function ProductsDirective() {
  return {
    restrict: 'E',
    templateUrl: '/partials/products/products_list.html',
    transclude: true,
    scope: {
      category: '=',
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
}

module.exports = ProductsDirective;
