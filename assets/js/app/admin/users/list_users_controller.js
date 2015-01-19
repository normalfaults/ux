'use strict';

/**@ngInject*/
var ListUsersController = function(users) {
  this.users = users;
};

ListUsersController.resolve = {
  /**@ngInject*/
  users: function(UsersResource) {
    return UsersResource.query().$promise;
  }
};

ListUsersController.prototype = {

};

module.exports = ListUsersController;
