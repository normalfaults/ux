'use strict';

/**@ngInject*/
var CloudsResource = function($resource, ApiResource) {
  return $resource(ApiResource('cloudsById'));
};

module.exports = CloudsResource;
