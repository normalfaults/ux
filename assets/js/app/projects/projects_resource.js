'use strict';

var _ = require('lodash');

/**@ngInject*/
var ProjectsResource = function($resource, apiResource) {
  var Project = $resource(apiResource('projectsById'), { id: '@id' }, {
    'update': { method:'PUT' },
    'approve': {
      url: apiResource('projectsById') + '/approve',
      method: 'POST',
      params: {'includes[]': ['approvals', 'approvers']}
    },
    'reject': {
      url: apiResource('projectsById') + '/reject',
      method: 'POST',
      params: {'includes[]': ['approvals', 'approvers']}
    },
    'approvals': {
      url: apiResource('projectsById') + '/approvals',
      method: 'GET',
      isArray: true
    }
  });

  Project.prototype.isApproved = function() {
    return this.approval === 'approved';
  };

  // TODO : Improve this; Dislike combining things this way.
  var finalApproval = _.memoize(function(approvals, approvers) {
    var approval = approvals[approvals.length - 1];
    if (approvers) {
      _.each(approvers, function(approver) {
        if (approver.id == approval.staff_id) {
          approval.staff_name = [approver.first_name, approver.last_name].join(' ');
        }
      });
    }
    return approval;
  });

  Project.prototype.finalApproval = function() {
    if (0 === this.approvals.length) {
      return null;
    }
    return finalApproval(this.approvals, this.approvers);
  };

  return Project;
};

module.exports = ProjectsResource;
