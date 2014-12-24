'use strict';
var _ = require('lodash');

/**@ngInject*/
var CartService = function($q, $state, OrderResource) {
  this.$q = $q;
  this.OrderResource = OrderResource;
  this.$state = $state;

  this.cart = this._getResource();
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
   * Clear Cart
   */
  clearCart: function() {
    this.cart = [];
    this._updateResource();
  },

  /**
   * Remove Item from Cart by Cart Index
   *
   * @param key
   */
  removeItemByKey: function(key) {
    this.cart.splice(key, 1);
    this._updateResource();
  },

  /**
   * Add item to cart
   *
   * @param requestedBy (User)
   * @param project
   * @param product
   */
  add: function (requestedBy, project, product) {
    this.cart.push({
      requestedBy: requestedBy,
      project:     project,
      product:     product
    });
    this._updateResource();
  },

  /**
   * Checkout
   * Creates order for each of the items
   *
   * @param checkoutCallback (optional)
   */
  checkout: function(checkoutCallback) {

    var cartPromises = [];

    _.each(this.cart, _.bind(function(item, key, cart) {
      var response = this.OrderResource.save({
          product_id: item.product.id,
          project_id: item.project.id,
          staff_id:   item.requestedBy.id,
          cloud_id:   item.product.cloud.id
      });

      cartPromises.push(response.$promise);
    }, this));

    this.$q.all(cartPromises).then(_.bind(function() {

      // Empty the Cart.
      this.clearCart();

      /**
       * If the state we are on is a project, reload it to get the new data.
       * If we are not on a project, when the user goes back to it, it will be reloaded
       * on state change.
       * @todo This is probably not the best way to handle this, but since the cart can be launched
       *       from anywhere, it's hard to pass in a callback without making an equally ugly global one.
       */
      if (this.$state.is('base.project')) {
        this.$state.reload();
      }

      // Call defined callback if exists.
      if (_.isFunction(checkoutCallback)) {
        checkoutCallback();
      }

    }, this), function() {
      // @todo Error/Reject case.
    });
  },

  /**
   * Update Cart Resource
   *
   * @private
   */
  _updateResource: function() {
    if (window.localStorage) {
      localStorage.setItem('cart', JSON.stringify(this.cart));
    }
  },

  /**
   * Get Cart Resource
   *
   * @returns {*|Array}
   * @private
   */
  _getResource: function() {
    if (window.localStorage) {
      var data = localStorage.getItem('cart');
      return data ? JSON.parse(data) : [];
    }

    return [];
  }

};

module.exports = CartService;