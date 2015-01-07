'use strict';

/**@ngInject*/
var AdminEditUserController = function(user) {
  this.user = user;
};

AdminEditUserController.resolve = {
  /**@ngInject*/
  user: function(UsersResource, $stateParams) {
    return UsersResource.get({id: $stateParams.id}).$promise;
  }
};

AdminEditUserController.prototype = {

};

module.exports = AdminEditUserController;
