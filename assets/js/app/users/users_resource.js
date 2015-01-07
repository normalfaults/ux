'use strict';

/**@ngInject*/
var UsersResource = function($resource, ApiResource) {
  var Users = $resource(ApiResource('staffById'), {'id': '@id'}, {
    // Get Current
    getCurrentMember: {
      method: 'GET',
      isArray: false,
      url: ApiResource('currentMember')
    },
    // Get Single
    get: {
      method: 'GET',
      isArray: false
    },
    // Get All
    query: {
      method: 'GET',
      isArray: true
    },
    'update': {
      method: 'PUT'
    }
  });

  /**
   * @todo This should probably be rethought a bit, since fullName/isAdmin
   *       can be called on a collection, not just a single item.
   */

  Users.prototype.fullName = function() {
    return [this.first_name, this.last_name].join(' ');
  };

  Users.prototype.isAdmin = function() {
    return this.role === 'admin';
  };

  return Users;
};

module.exports = UsersResource;
