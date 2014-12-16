'use strict';

// @todo Ideally these should be prototyped, but with how it's included it gets added right to the scope, and relies on parent
//       controller for headerData and currentUser

/**@ngInject*/
var HeaderController = function($rootScope, $scope, $modal, Cart) {

  $scope.cartModal = function () {
    var modalInstance = $modal.open({
      templateUrl: 'cart/cart-modal.html',
      controller: 'CartController as cartCtrl',
      size: 'lg'
    });
  };

  $scope.cartCount = function() {
    return Cart.count();
  }

};

module.exports = HeaderController;
