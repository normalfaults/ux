'use strict';
var _ = require('lodash');

/**@ngInject*/
var CartService = function(OrderResource) {
  this.cart = [];
  this.OrderResource = OrderResource;
};

CartService.prototype = {

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
    this.cart.splice(key, 1);
  },

  /**
   * Add item to cart
   * @todo Needs different parameters
   *
   * @param requestedBy
   * @param project
   * @param product
   */
  add: function (requestedBy, project, product) {
    this.cart.push({
      requestedBy: requestedBy,
      project:     project,
      product:     product
    });
  },

  /**
   * Checkout
   * Creates order for each of the items
   */
  checkout: function() {
    _.each(this.cart, _.bind(function(item, key, cart) {
      console.warn(item);
      var response = this.OrderResource.save({
          product_id: item.product.id,
          project_id: item.project.id,
          staff_id: item.requestedBy.id,
          cloud_id: item.product.cloud.id
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

module.exports = CartService;