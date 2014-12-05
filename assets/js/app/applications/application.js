'use strict';

/**@ngInject*/
function Application($resource, ApiResource) {
  return $resource(ApiResource('applicationsById'));
}

module.exports = Application;
