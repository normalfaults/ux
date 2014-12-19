'use strict';

/**@ngInject*/
function ProductBox() {
  return {
    restrict: 'E',
    scope: {
      product: "=",
      allowEdit: "=",
      allowAddToCart: "="
    },
    templateUrl: '/partials/products/product_box.html'
  };
}

module.exports = ProductBox;
