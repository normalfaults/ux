'use strict';

var Cart = function() {

  this.cart = {};

  this.add = function (projectId, serviceId) {
    this.cart.push({
      projectId: projectId,
      serviceId: serviceId
    });
  };

  this.count = function() {
    return this.cart.length;
  }

};

module.exports = Cart;