'use strict';

// @todo Ideally these should be prototyped, but with how it's included it gets added right to the scope, and relies on parent
//       controller for headerData and currentUser

/**@ngInject*/
var HeaderController = function($rootScope, $scope, $modal, Cart) {

  var isModalOpen = false;

  $scope.cartModal = function () {

    if (isModalOpen) {
      return;
    }

    isModalOpen = true;

    var modalInstance = $modal({
      templateUrl: 'cart/cart-modal.html',
      controller: 'CartController as cartCtrl',
      size: 'lg'
    });

    var setModalStatusClosed = function() {
      isModalOpen = false;
    };

    modalInstance.result.finally(setModalStatusClosed, setModalStatusClosed);
  };

  $scope.cartCount = function() {
    return Cart.count();
  }

};

module.exports = HeaderController;
