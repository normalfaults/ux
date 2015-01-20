'use strict';

function BaseMarketplaceController() {

}

BaseMarketplaceController.resolve = {
  /**@ngInject*/
  categories: function(ProductTypesResource) {
    return ProductTypesResource.query({"includes[]": ["questions"]}).$promise;
  },
  /**@ngInject*/
  products: function(ProductsResource) {
    return ProductsResource.query({"includes[]": ["cloud", "answers"], active: true}).$promise;
  }
};

module.exports = BaseMarketplaceController;
