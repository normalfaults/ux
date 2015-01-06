'use strict';

/**@ngInject*/
var UsersResource = function($resource, ApiResource) {
  return $resource(ApiResource('staffById'), {'id': '@id'}, {
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
};

module.exports = UsersResource;
