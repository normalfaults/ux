'use strict';

/**@ngInject*/
function UsersOrdersController($scope, orders) {
    $scope.orders = _.map(orders, function(order) {
        order.item_count = order.order_items.length;
        return order;
    });
}

UsersOrdersController.resolve = {
    /**@ngInject*/
    orders: function(UserResource, UsersOrders, $q) {
        //note: really sucks that I have to resolve the current user first. We might have to rethink how we pull current user in header.

        var deferred = $q.defer();

        UserResource.getCurrentMember().$promise.then(
            function(staff_member) {
                deferred.resolve(UsersOrders.query({staff_id: staff_member.id, includes: ['order_items']}).$promise);
            }, function() {
                alert("There was a problem loading you orders. Please try again.");
                deferred.resolve([]);
            }
        );

        return deferred.promise;
    }
};

module.exports = UsersOrdersController;