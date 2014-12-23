'use strict';

var _ = require('lodash');

/**@ngInject*/
function CreateProductController(product) {
  this.product = product;
}

CreateProductController.resolve = {
  /**@ngInject*/
  product: function(ProductResource, $stateParams) {
    return new ProductResource($stateParams);
  }
};

module.exports = CreateProductController;


