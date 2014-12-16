'use strict';

var _ = require('lodash');

/**@ngInject*/
var HeaderController = function($rootScope, $scope, $sce, $modal, Cart, headerData, currentUser) {

  this.$modal = $modal;
  this.Cart = Cart;

  $scope.headerData = headerData;
  $scope.currentUser = currentUser;

  angular.forEach(headerData.notifications, function(item) {
    item.trustedHtml = $sce.trustAsHtml(item.text);
   });

  this.isModalOpen = false;
};

HeaderController.resolve = {
  /**@ngInject*/
  headerData: function(HeaderData) {
    return HeaderData.get().$promise;
  },
  /**@ngInject*/
  currentUser: function(User) {
    return User.getCurrentMember().$promise;
  }
};

HeaderController.prototype = {

  cartModal: function () {

      if (this.isModalOpen) {
        return;
      }

      this.isModalOpen = true;

      var modalInstance = this.$modal.open({
        templateUrl: 'cart/cart-modal.html',
        controller: 'CartController as cartCtrl',
        size: 'lg'
      });

      var setModalStatusClosed = _.bind(function() {
        this.isModalOpen = false;
      }, this);

      modalInstance.result.finally(setModalStatusClosed, setModalStatusClosed);
    },

  cartCount: function() {
    return this.Cart.count();
  }
};

module.exports = HeaderController;



