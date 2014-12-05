'use strict';

/**@ngInject*/
function Solution($resource, ApiResource) {
  return $resource(ApiResource('solutions'));
}

module.exports = Solution;
