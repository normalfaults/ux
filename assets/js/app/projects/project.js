'use strict';

/**@ngInject*/
var ProjectFactory = function($resource, ApiResource) {
  var Project = $resource(ApiResource('projectsById'));

  Project.prototype.isApproved = function() {
    // @todo This should actually return the approval status :)
    return true;
  };

  return Project;
};

module.exports = ProjectFactory;