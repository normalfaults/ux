'use strict';

var _ = require('lodash');

/**@ngInject*/
var JellyfishModal = function($modal) {

  var modals = {};

  return {
    /**
     * Wraps the $modal.open method
     *  - Prevents multiple of the same modal from being open up (if option `id` is used)
     *  - Closes other open modals before opening yours.
     *
     * @param options
     * @returns {*}
     */
    open: function(options) {
      var id = options.id || Math.random();

      var existingModal = modals[id];

      /**
       * If the modal is already open, just return the existing modal
       * do not open anything.
       */
      if (existingModal && existingModal.isOpen) {
        return modals[id].modal;
      }

      // If it exists already, remove it to reopen it.
      delete modals[id];

      /**
       * Go through other registered modals.
       */
      _.each(modals, function(item) {
        if (item.isOpen) {
          item.modal.close();
        }
      });

      var modal = $modal.open.apply($modal, arguments);
      modals[id] = {
        isOpen: true,
        modal: modal
      };

      var onClose = function() {
        modals[id].isOpen = false;
      };

      modal.result.finally(onClose, onClose);
      return modal;
    }
  };
};

module.exports = JellyfishModal;