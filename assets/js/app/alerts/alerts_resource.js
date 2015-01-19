'use strict';

/**@ngInject*/
var AlertsResource = function($resource, apiResource) {
  return $resource(apiResource('alerts'), {}, {
    query: {
      isArray: true,
      method: 'GET'
    }
  });
};

module.exports = AlertsResource;