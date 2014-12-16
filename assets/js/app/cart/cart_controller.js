'use strict';

/**@ngInject*/
var CartController = function($scope, $modalInstance, Cart) {

  this.$modalInstance = $modalInstance;
  this.Cart = Cart;

};

CartController.prototype = {
  checkout : function() {

  },

  close: function() {
    this.$modalInstance.close();
  },

  cartItems: function() {
    return this.Cart.getItems();
  }


};

module.exports = CartController;
