'use strict';

var Cart = function() {

  this.cart = [];

};

Cart.prototype = {

  count: function() {
    return this.cart.length;
  },

  getItems: function() {
    return this.cart;
  },

  add: function (projectId, productId, productName) {
    this.cart.push({
      projectId: projectId,
      productId: productId,
      productName: productName
    });
  }

};

module.exports = Cart;