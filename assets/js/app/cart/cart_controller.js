'use strict';

/**@ngInject*/
var CartController = function($scope, $modalInstance) {

  this.$modalInstance = $modalInstance;

};

CartController.prototype = {
  checkout : function() {

  },

  close: function() {
    this.$modalInstance.close();
  }


};

module.exports = CartController;
