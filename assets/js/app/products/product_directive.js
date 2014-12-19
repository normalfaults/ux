'use strict';

/**@ngInject*/
function ProductBox() {
  return {
    restrict: 'E',
    templateUrl: '/partials/products/product_box.html',
    transclude: true,
    scope: {
      product: "="
    }
  };
}

module.exports = ProductBox;
