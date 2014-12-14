'use strict';

/**@ngInject*/
var ProjectUser = function($resource, ApiResource) {
    var ProjectUserService = $resource(ApiResource(), {id:'@id', staff_id:'@staff_id'}, {
        addUserToProject: {
            method: "POST",
            url: ApiResource('projectUser')
        },
        removeUserFromProject: {
            method: "DELETE",
            url: ApiResource('projectUser')
        }
    });

    return ProjectUserService;
};

module.exports = ProjectUser;