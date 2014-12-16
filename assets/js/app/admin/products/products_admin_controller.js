'use strict';

/**@ngInject*/
function ProductsAdminController(categories) {
}

ProductsAdminController.resolve = {
  /**@ngInject*/
  categories: function(ProductCategory) {
    return ProductCategory.query().$promise;
  }
};

module.exports = ProductsAdminController;
