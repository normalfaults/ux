'use strict';

/**@ngInject*/
var ProjectFactory = function($resource, ApiResource) {
  var Project = $resource(ApiResource('projectsById'));

  Project.prototype.isApproved = function() {
    return this.approved;
  };

  return Project;
};

module.exports = ProjectFactory;