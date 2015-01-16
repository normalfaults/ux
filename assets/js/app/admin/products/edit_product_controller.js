'use strict';

var _ = require('lodash');

/**@ngInject*/
function EditProductController(product) {
  this.product = product;
}

EditProductController.resolve = {
  /**@ngInject*/
  product: function(ProductsResource, $stateParams) {
    return ProductsResource.get({id: $stateParams.id}).$promise;
  }
};

module.exports = EditProductController;

