'use strict';

var _ = require('lodash');

/**@ngInject*/
var HeaderController = function($rootScope, $scope, $sce, JellyfishModal, CartService, currentUser, alerts) {

  this.JellyfishModal = JellyfishModal;
  this.CartService = CartService;
  this.alerts = alerts;
  this.currentUser = currentUser;

  // @todo This is in the wrong format, does not match the problem-alerts.html partial format.
  angular.forEach(this.alerts, function(item) {
    item.trustedHtml = $sce.trustAsHtml(item.text);
  });

  this.isModalOpen = false;
};

HeaderController.resolve = {

};

HeaderController.prototype = {

  /**
   * Move this to a state.
   */
  cartModal: function () {
      this.JellyfishModal.open({
        id: 'cart',
        templateUrl: '/partials/cart/cart-modal.html',
        controller: 'CartController as cartCtrl',
        size: 'lg'
      });
    },

  cartCount: function() {
    return this.CartService.getCount();
  }
};

module.exports = HeaderController;



