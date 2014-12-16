'use strict';

// @todo Ideally these should be prototyped, but with how it's included it gets added right to the scope, and relies on parent
//       controller for headerData and currentUser

/**@ngInject*/
var HeaderController = function($rootScope, $scope, Cart) {

  $scope.cartModal = function() {
    
  };

  $scope.cartCount = function() {
    return Cart.count();
  }

};

module.exports = HeaderController;
