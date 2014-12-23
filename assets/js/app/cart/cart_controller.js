'use strict';

/**@ngInject*/
var CartController = function($scope, $modalInstance, CartService) {

  this.$modalInstance = $modalInstance;
  this.CartService = CartService;

};

CartController.prototype = {
  checkout : function() {
    this.CartService.checkout();
  },

  close: function() {
    this.$modalInstance.close();
  },

  cartItems: function() {
    return this.CartService.getItems();
  }


};

module.exports = CartController;
