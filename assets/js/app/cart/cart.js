'use strict';

var Cart = function() {

  this.cart = [
    {'projectId': '100', 'productName': 'Product in Cart 1'},
    {'projectId': '100', 'productName': 'Product in Cart 2'}
  ];

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