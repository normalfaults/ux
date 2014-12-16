'use strict';

var _ = require('lodash');

/**@ngInject*/
function CreateProductController(product, categories) {
  var self = this;

  this.product = product;
  this.categories = categories;
}

CreateProductController.resolve = {
  /**@ngInject*/
  product: function(Product, $stateParams) {
    return new Product();
  }
};

module.exports = CreateProductController;


