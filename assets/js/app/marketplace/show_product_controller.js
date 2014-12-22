'use strict';

/**@ngInject*/
function ShowProductController(product) {
  this.product = product;
}

ShowProductController.resolve = {
  /**@ngInject*/
  product: function(Product, $stateParams) {
    return Product.get({id: $stateParams.id, 'includes[]': 'product_category'}).$promise;
  }
};

module.exports = ShowProductController;
