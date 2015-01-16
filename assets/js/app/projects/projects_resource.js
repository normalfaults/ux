'use strict';

/**@ngInject*/
var ProjectsResource = function($resource, ApiResource) {
  var Project = $resource(ApiResource('projectsById'), { id: '@id' }, {
    'update': { method:'PUT' }
  });

  Project.prototype.isApproved = function() {
    return this.approved;
  };

  return Project;
};

module.exports = ProjectsResource;