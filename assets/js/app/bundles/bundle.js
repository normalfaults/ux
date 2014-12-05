'use strict';

/**@ngInject*/
function Bundle($resource, ApiResource) {
  return $resource(ApiResource('bundlesById'));
}

module.exports = Bundle;
