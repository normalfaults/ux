'use strict';

/**@ngInject*/
var CloudResource = function($resource, ApiResource) {
  return $resource(ApiResource('cloudsById'));
};

module.exports = CloudResource;
