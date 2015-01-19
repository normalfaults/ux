'use strict';

function BaseMarketplaceController() {

}

BaseMarketplaceController.resolve = {
  /**@ngInject*/
  categories: function(ProductTypeResource) {
    return ProductTypeResource.query({"includes[]": ["questions"]}).$promise;
  },
  /**@ngInject*/
  products: function(ProductResource) {
    return ProductResource.query({"includes[]": ["cloud", "answers"]}).$promise;
  }
};

module.exports = BaseMarketplaceController;
