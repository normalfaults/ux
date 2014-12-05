'use strict';

/**@ngInject*/
function HeaderData($resource, ApiResource) {
  return $resource(ApiResource('header'));
}

module.exports = HeaderData;
