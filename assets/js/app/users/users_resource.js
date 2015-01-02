'use strict';

/**@ngInject*/
var UserResource = function($resource, ApiResource) {
  return $resource(ApiResource('staffById'), {'id': '@id'}, {
    get: {
      method: 'GET',
      isArray: true
    }
  });
};

module.exports = UserResource;
