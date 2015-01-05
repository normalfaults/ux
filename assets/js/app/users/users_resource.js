'use strict';

/**@ngInject*/
var UsersResource = function($resource, ApiResource) {
  return $resource(ApiResource('staffById'), {'id': '@id'}, {
    get: {
      method: 'GET',
      isArray: false
    },
    // Get All
    query: {
      method: 'GET',
      isArray: true
    }
  });
};

module.exports = UsersResource;
