'use strict';

/**@ngInject*/
function Project($resource, ApiResource) {
  return $resource(ApiResource('projectsById'));
}

module.exports = Project;
