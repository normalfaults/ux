'use strict';

var _ = require('lodash');

/**@ngInject*/
var CartController = function($scope, $modalInstance, CartService) {

  this.$modalInstance = $modalInstance;
  this.CartService = CartService;

};

CartController.prototype = {
  checkout : function(checkoutCallback) {

    var wrappedCallback = _.bind(function() {
      this.$modalInstance.close();
      if (_.isFunction(checkoutCallback)) {
        checkoutCallback();
      }
    }, this);

    this.CartService.checkout(wrappedCallback);
  },

  close: function() {
    this.$modalInstance.close();
  },

  cartItems: function() {
    return this.CartService.getItems();
  },

  removeItem: function(key) {
    return this.CartService.removeItemByKey(key);
  },
  
  totalPrice: function() {
    return this.CartService.getTotalPrice();
  }


};

module.exports = CartController;
