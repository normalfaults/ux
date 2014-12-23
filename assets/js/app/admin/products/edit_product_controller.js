'use strict';

var _ = require('lodash');

/**@ngInject*/
function EditProductController(product) {
  this.product = product;
}

EditProductController.resolve = {
  /**@ngInject*/
  product: function(ProductResource, $stateParams) {
    return ProductResource.get({id: $stateParams.id}).$promise;
  }
};

module.exports = EditProductController;

