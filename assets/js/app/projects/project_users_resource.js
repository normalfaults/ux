'use strict';

/**@ngInject*/
var ProjectUsersResource = function($resource, ApiResource) {
    return $resource(
      ApiResource('projectUser'),
      {id:'@id', staff_id:'@staff_id'},
      {}
    );
};

module.exports = ProjectUsersResource;
