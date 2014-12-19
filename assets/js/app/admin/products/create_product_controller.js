'use strict';

var _ = require('lodash');

/**@ngInject*/
function CreateProductController(product) {
  this.product = product;
}

CreateProductController.resolve = {
  /**@ngInject*/
  product: function(Product, $stateParams) {
    return new Product($stateParams);
  }
};

module.exports = CreateProductController;


