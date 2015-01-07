'use strict';

/**@ngInject*/
var UserOrders = function($resource, ApiResource) {
    return $resource(ApiResource('userOrders'), {id:'@id', staff_id: '@staff_id'}, {});
};

module.exports = UserOrders;