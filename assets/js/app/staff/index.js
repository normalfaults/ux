var StaffModule = angular.module('broker.staff', [])
    .factory('Staff', require('./staff'))

module.exports = StaffModule;