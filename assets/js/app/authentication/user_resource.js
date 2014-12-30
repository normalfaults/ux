'use strict';

/**@ngInject*/
var UserResource = function($resource, ApiResource) {
  var User = $resource(ApiResource('usersById'), {}, {
    getRecentUsers: {
      method: "GET",
      isArray: true,
      url: ApiResource('recentUsers')
    },
    getCurrentMember: {
      method: 'GET',
      isArray: false,
      url: ApiResource('currentMember')
    }
  });

  User.prototype.fullName = function() {
    return [this.first_name, this.last_name].join(' ');
  };

  User.prototype.isAdmin = function() {
    return this.role === 'admin';
  };

  return User;
};

module.exports = UserResource;
