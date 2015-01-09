'use strict';

/**@ngInject*/
var ShowProductController = function($state, $rootScope, product) {

  this.$state = $state;

  this.product = product;


  this.backTo = $rootScope.previousState;
  this.backToParams = $rootScope.previousStateParams;
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
