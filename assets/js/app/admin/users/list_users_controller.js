'use strict';

var _ = require('lodash');

/**@ngInject*/
var ListUsersController = function(users) {

  this.users = users;

};

ListUsersController.resolve = {
  /**@ngInject*/
  users: function(UsersResource) {
    return UsersResource.get().$promise;
  }
};

module.exports = ListUsersController;
