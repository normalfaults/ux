'use strict';

/**@ngInject*/
function Cloud($resource, ApiResource) {
  return $resource(ApiResource('cloudsById'));
}

module.exports = Cloud;
