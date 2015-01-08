'use strict';

/**@ngInject*/
var AlertsResource = function($resource, ApiResource) {
  return $resource(ApiResource('alerts'), {}, {
    query: {
      isArray: true,
      method: 'GET'
    }
  });
};

module.exports = AlertsResource;