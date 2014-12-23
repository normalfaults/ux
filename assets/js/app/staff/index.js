var StaffModule = angular.module('broker.staff', [])
    .directive('staff', require('./staff_directive'))
    .factory('Staff', require('./staff'))

module.exports = StaffModule;