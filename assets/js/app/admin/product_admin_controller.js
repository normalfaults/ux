'use strict';

function ProductAdminController($scope, products, categories) {
  this.products = products;
  this.categories = categories;
}

ProductAdminController.resolve = {
  /**@ngInject*/
  products: function(Product) {
    return Product.query().$promise;
  },
  /**@ngInject*/
  categories: function(ProductCategory) {
    return ProductCategory.query().$promise;
  }
};

module.exports = ProductAdminController;
