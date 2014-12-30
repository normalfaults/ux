'use strict';

/**@ngInject*/
var ProductBoxDirective = function() {
  return {
    restrict: 'E',
    templateUrl: '/partials/products/product_box.html',
    transclude: true,
    scope: {
      product: "="
    }
  };
};

module.exports = ProductBoxDirective;
