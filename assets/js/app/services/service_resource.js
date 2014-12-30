'use strict';

/**@ngInject*/
var ServiceResource = function($resource, ApiResource) {
  return $resource(ApiResource('servicesById'));
};

module.exports = ServiceResource;
