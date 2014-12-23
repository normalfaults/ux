'use strict';

/**@ngInject*/
var ProjectServicesController = function($scope, $modalInstance, Cart, Project, products, categories, currentUser) {
  this.Cart = Cart;
  this.Project = Project;
  this.CurrentUser = currentUser;

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };

  /**
   * @todo This mirrors the marketplace controller currently
   *       and very close to the admin/products page.
   *       Perhaps we could wrap it up into a service/factory better.
   */
  this.categories = categories;
  // Only display non deleted products.
  this.products = _.filter(products, function(product) {
    return product.deleted_at === null;
  });

  _.each(this.categories, _.bind(function(category) {
    category.products = _.filter(this.products, function(product) {
      return product.product_category_id == category.id;
    });
  }, this));
};

ProjectServicesController.resolve = {
  /**@ngInject*/
  categories: function(ProductCategory) {
    return ProductCategory.query().$promise;
  },
  /**@ngInject*/
  products: function(Product) {
    return Product.query({"includes[]": ["cloud"]}).$promise;
  }
};


ProjectServicesController.prototype = {

  addToCart: function(product) {
    console.warn(this.CurrentUser, this.Project, product);
    this.Cart.add(this.CurrentUser, this.Project, product);
  },

  cartCount: function(projectId, productId) {
    var cartItems = this.Cart.getItems();

    var filtered = _.filter(cartItems, function(item) {
      return (item.productId == productId && item.projectId == projectId);
    });

    return filtered.length;
  }
};

module.exports = ProjectServicesController;