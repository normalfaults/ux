'use strict';

/**@ngInject*/
var ShowProductController = function($state, $scope, product) {

  this.$state = $state;

  this.product = product;

  // Default 'Back' is going to the marketplace list.
  this.backTo = 'marketplace';
  this.backToParams = {};

  /**
   * If we come to this page from the order detail page, we set the back to to orderDetail, and set the parameters.
   * @todo This is a bit ugly since the previousRoute does not include its state, so we have to check based on the URL
   *       and then the state is hard coded in the template.
   */
  $scope.$on('$stateChangeSuccess', _.bind(function($stateChangeSuccess, newRoute, newRouteParams, previousRoute, previousRouteParams) {
      if (previousRoute.url == "/orders/:id") {
        this.backTo = 'orderDetail';
        this.backToParams = previousRouteParams;
      }
  }, this));
};

ShowProductController.prototype = {

};

ShowProductController.resolve = {
  /**@ngInject*/
  product: function(ProductResource, $stateParams) {
    return ProductResource.get({id: $stateParams.id, 'includes[]': 'product_category'}).$promise;
  }
};

module.exports = ShowProductController;
