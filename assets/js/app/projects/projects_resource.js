'use strict';

/**@ngInject*/
var ProjectsResource = function($resource, apiResource) {
  var Project = $resource(apiResource('projectsById'), { id: '@id' }, {
    'update': { method:'PUT' },
    'approve': {
      url: apiResource('projectsById') + '/approve',
      method: 'POST'
    },
    'reject': {
      url: apiResource('projectsById') + '/reject',
      method: 'POST'
    },
    'approvals': {
      url: apiResource('projectsById') + '/approvals'
    }
  });

  Project.prototype.isApproved = function() {
    return this.approved;
  };

  return Project;
};

module.exports = ProjectsResource;
