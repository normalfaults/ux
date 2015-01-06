'use strict';

var _ = require('lodash');

var adminUsersListState = 'base.admin.users.list';

/**
 * @todo This mirrors the product_form_controller.js file in a lot of regards, could be abstracted.
 */

/**@ngInject*/
var AdminUserFormController = function($state) {

  this.$state = $state;
  this.user = null;
  this.formSubmitted = false;

  // Set the available roles.
  // @todo Should probably be pulled form the backend
  // @todo For some reason ui-select goes nuts if this is returned from a method.
  this.roles = [
    {
      value: 'user',
      name: 'User'
    },
    {
      value: 'admin',
      name: 'Admin'
    }
  ];
};

AdminUserFormController.prototype = {

  /**
   * Take the user resource from the parent (edit/add).
   *
   * @param parent
   */
  initForm: function(parent) {
    this.user = parent.user;
  },

  create: function() {
    this.formSubmitted = true;
    if (this.form.$invalid) {
      return false;
    }
    this.user.$save(_.bind(function() {
      this.$state.go(adminUsersListState);
    }, this), function() {
      // TODO: Failure
    });
  },

  update: function() {
    this.formSubmitted = true;
    if (this.form.$invalid) {
      return false;
    }

    this.user.$update(_.bind(function() {
      this.$state.go(adminUsersListState);
    }, this), function() {
      // TODO: Failure
    });
  },

  destroy: function() {
    this.formSubmitted = true;
    this.user.$delete(_.bind(function() {
      this.$state.go(adminUsersListState);
    }, this), function() {
      // TODO: Failure
    });
  },

  canSubmit: function() {
    return !this.formSubmitted || (this.form.$dirty && this.form.$valid);
  },

  hasError: function(field, validation) {
    // Only show validation errors on submit; Avoids angulars hasty error messaging
    if (validation) {
      return this.formSubmitted && this.form[field].$error[validation];
    }
    return this.formSubmitted && this.form[field].$invalid;
  }
};


module.exports = AdminUserFormController;
