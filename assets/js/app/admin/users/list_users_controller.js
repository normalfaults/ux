'use strict';

var _ = require('lodash');

/**@ngInject*/
var ListUsersController = function(UsersResource, users) {

  this.UsersResource = UsersResource;

  this.users = users;

};

ListUsersController.resolve = {
  /**@ngInject*/
  users: function(UsersResource) {
    return UsersResource.get().$promise;
  }
};

ListUsersController.prototype = {

  removeUser: function(userKey) {

    var userId = this.users[userKey].id;
    this.UsersResource.delete({id: userId}).$promise.then(
      _.bind(function() {
        this.users.splice(userKey, 1);
      }, this),
      function() {
        // @todo Errors should be moved more global.
        alert('Error removing users');
      }
    );
  }

};

module.exports = ListUsersController;
