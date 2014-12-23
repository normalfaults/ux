'use strict';

/**@ngInject*/
var ApplicationResource = function($resource, ApiResource) {
  return $resource(ApiResource('applicationsById'));
};

module.exports = ApplicationResource;
