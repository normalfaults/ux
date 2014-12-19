'use strict';

/**@ngInject*/
function ProductsDirective() {
  return {
    restrict: 'E',
    templateUrl: '/partials/products/products_list.html',
    scope: {
      category: '=',
      products: '=',
      allowAdd: '=',
      allowAddToCart: '=',
      allowEdit: '=',
      viewType:  '@viewType',
      allowViewTypeToggle: '='
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
