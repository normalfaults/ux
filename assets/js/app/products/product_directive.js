'use strict';

/**@ngInject*/
function ProductBox() {
  return {
    restrict: 'E',
    scope: {
      product: "=",
      allowEdit: "=",
      addToCartCallback: "&addToCartCallback"
    },
    templateUrl: '/partials/products/product_box.html',
    link: function($scope, $element) {
      console.warn($scope.addToCartCallback);
    }
  }
}

module.exports = ProductBox;
