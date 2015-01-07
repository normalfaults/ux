'use strict';

/**@ngInject*/
function UserOrderController($scope, orders) {
    this.orders = orders;
}

UserOrderController.prototype.getOrders = function() {
    return this.orders;
}

UserOrderController.resolve = {
    /**@ngInject*/
    orders: function(UserResource, UserOrders, $q, currentUser) {
        return UserOrders.query({staff_id: currentUser.id, 'methods[]': 'item_count'}).$promise;
    }
};

module.exports = UserOrderController;