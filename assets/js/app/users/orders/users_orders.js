'use strict';

/**@ngInject*/
var UsersOrders = function($resource, ApiResource, Session) {
    return $resource(ApiResource('usersOrders'), {id:'@id', staff_id: '@staff_id'}, {});
};

module.exports = UsersOrders;