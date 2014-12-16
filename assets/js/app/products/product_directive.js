'use strict';

/**@ngInject*/
function ProductBox() {
  return {
    restrict: 'E',
    scope: {
      product: "="
    },
    templateUrl: '/partials/products/product_box.html'
  };
}

module.exports = ProductBox;
