'use strict';

/**@ngInject*/
var AdminAddUserController = function(user) {
  this.user = user;
};

AdminAddUserController.resolve = {
  /**@ngInject*/
  user: function(UsersResource) {
    return new UsersResource();
  }
};

AdminAddUserController.prototype = {

};

module.exports = AdminAddUserController;
