'use strict';

/**@ngInject*/
function UserOrderController($scope, orders) {
    this.orders = orders;
}

UserOrderController.prototype.getOrders = function() {
    return this.orders;
};

UserOrderController.resolve = {
    /**@ngInject*/
    orders: function(UserOrders, currentUser) {
        return UserOrders.query({staff_id: currentUser.id}).$promise;
    }
};

module.exports = UserOrderController;