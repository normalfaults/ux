'use strict';

/**@ngInject*/
var ShowProductController = function($state, product) {

  this.$state = $state;
  this.product = product;
};

ShowProductController.prototype = {

};

ShowProductController.resolve = {
  /**@ngInject*/
  product: function(ProductResource, $stateParams) {
    return ProductResource.get({id: $stateParams.id, 'includes[]': 'product_category'}).$promise;
  }
};

module.exports = ShowProductController;
