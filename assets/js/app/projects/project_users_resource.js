'use strict';

/**@ngInject*/
var ProjectUsersResource = function($resource, apiResource) {
    return $resource(
      apiResource('projectUser'),
      {id:'@id', staff_id:'@staff_id'},
      {}
    );
};

module.exports = ProjectUsersResource;
