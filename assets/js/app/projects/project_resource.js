'use strict';

/**@ngInject*/
var ProjectResource = function($resource, ApiResource) {
  var Project = $resource(ApiResource('projectsById'), { id: '@id' }, {
    'update': { method:'PUT' }
  });

  Project.prototype.isApproved = function() {
    return this.approved;
  };

  return Project;
};

module.exports = ProjectResource;