'use strict';

var _ = require('lodash');

/**@ngInject*/
function MarketplaceController($scope, products, categories) {
  this.products = products;
  this.categories = categories;

  _.each(this.categories, _.bind(function(category) {
    category.products = _.filter(this.products, function(product) {
      return product.product_category_id == category.id;
    });
  }, this));
}

MarketplaceController.resolve = {
  /**@ngInject*/
  categories: function(ProductCategory) {
    return ProductCategory.query().$promise;
  },
  /**@ngInject*/
  products: function(Product) {
    return Product.query({"includes[]": ["cloud"]}).$promise;
  }
};

module.exports = MarketplaceController;