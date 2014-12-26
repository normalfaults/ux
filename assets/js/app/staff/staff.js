'use strict';

/**@ngInject*/
var StaffFactory = function($resource, ApiResource) {
    return $resource(ApiResource('staffsById'), { id: '@id', project_id: '@project_id'});
};

module.exports = StaffFactory;