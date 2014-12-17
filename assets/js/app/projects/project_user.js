'use strict';

/**@ngInject*/
var ProjectUser = function($resource, ApiResource) {

    var projectUser = $resource(ApiResource('projectUser'), {id:'@id', staff_id:'@staff_id'}, {
        addUserToProject: {
            method: "POST"
        },
        removeUserFromProject: {
            method: "DELETE"
        }
    });

    return projectUser;
};

module.exports = ProjectUser;