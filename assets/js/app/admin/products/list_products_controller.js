'use strict';

var _ = require('lodash');

/**@ngInject*/
function ListProductsController(products, categories) {
  var self = this;

  this.products = products;
  this.categories = categories;

  _.each(this.categories, function(category) {
    category.products = _.filter(self.products, function(product) {
      return product.product_category_id == category.id;
    });
  });
}

ListProductsController.resolve = {
  /**@ngInject*/
  products: function(ProductResource) {
    return ProductResource.query({"includes[]": ["cloud"]}).$promise;
  }
};

module.exports = ListProductsController;
