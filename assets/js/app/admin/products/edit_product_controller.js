'use strict';

var _ = require('lodash');

/**@ngInject*/
function EditProductController(product, categories) {
  var self = this;

  this.product = product;
  this.categories = categories;
}

EditProductController.resolve = {
  /**@ngInject*/
  product: function(Product, $stateParams) {
    return Product.get({id: $stateParams.id, "includes[]": ["cloud"]}).$promise;
  }
};

module.exports = EditProductController;

