'use strict';

// @todo Should be combined with userss/users_resource.js -- Although prototype might make this hard with multiples.
/**@ngInject*/
var UserResource = function($resource, ApiResource) {
  var User = $resource(ApiResource('staffById'), {}, {
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
