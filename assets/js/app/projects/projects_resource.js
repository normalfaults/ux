'use strict';

/**@ngInject*/
var ProjectsResource = function($resource, apiResource) {
  var Project = $resource(apiResource('projectsById'), { id: '@id' }, {
    'update': { method:'PUT' }
  });

  Project.prototype.isApproved = function() {
    return this.approved;
  };

  return Project;
};

module.exports = ProjectsResource;