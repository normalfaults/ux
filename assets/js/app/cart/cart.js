'use strict';
var _ = require('lodash');

/**@ngInject*/
var Cart = function(Order) {
  this.cart = [];
  this.OrderResource = Order;
};

Cart.prototype = {

  /**
   * Get Cart Count
   *
   * @returns {Number}
   */
  getCount: function() {
    return this.cart.length;
  },

  /**
   * Return all cart items.
   *
   * @returns {Array}
   */
  getItems: function() {
    return this.cart;
  },


  /**
   * Remove Item from Cart by Cart Index
   * @param key
   */
  removeItemByKey: function(key) {

  },

  /**
   * Add item to cart
   * @todo Needs different parameters
   *
   * @param projectId
   * @param productId
   * @param productName
   */
  add: function (projectId, productId, productName) {
    this.cart.push({
      projectId: projectId,
      productId: productId,
      productName: productName
    });
  },

  /**
   * Checkout
   * Creates order for each of the items
   */
  checkout: function() {
    _.each(this.cart, _.bind(function(item, key, cart) {
      var response = this.OrderResource.save({

      });

      response.$promise.then(_.bind(function() {
        // If successful, we remove it from the cart.
        // @todo Might want to revist as this causes items to be removed from the cart one by one
        //       which can be a bit odd.  But allows for retry on failure of individual items.
        this.removeItemByKey(key);
      }, this));

    }, this));
  }

};

module.exports = Cart;