'use strict';

/**@ngInject*/
function ProductBox() {
  return {
    restrict: 'E',
    scope: {
      product: "=",
      allowEdit: "="
    },
    templateUrl: '/partials/products/product_box.html'
  };
}

module.exports = ProductBox;
