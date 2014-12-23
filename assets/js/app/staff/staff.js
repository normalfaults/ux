'use strict';

/**@ngInject*/
var StaffFactory = function($resource, ApiResource) {
    var Staff = $resource(ApiResource('staffsById'), { id: '@id', project_id: '@project_id'}, {
        addProjectToStaff: {
            url: ApiResource('staffProjects'),
            method: "POST"
        },
        removeProjectFromStaff: {
            url: ApiResource('staffProjects'),
            method: "DELETE"
        }});

    return Staff;
};

module.exports = StaffFactory;