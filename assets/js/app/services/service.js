'use strict';

/**@ngInject*/
function Service($resource, ApiResource) {
  return $resource(ApiResource('servicesById'));
}

module.exports = Service;
