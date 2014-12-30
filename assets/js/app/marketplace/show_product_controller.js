'use strict';

/**@ngInject*/
function ShowProductController(product) {
  this.product = product;
}

ShowProductController.resolve = {
  /**@ngInject*/
  product: function(ProductResource, $stateParams) {
    return ProductResource.get({id: $stateParams.id, 'includes[]': 'product_category'}).$promise;
  }
};

module.exports = ShowProductController;
