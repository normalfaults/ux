'use strict';

var ListUsersData = require('./list_users_controller').resolve;

/**@ngInject*/
module.exports = function($stateProvider) {
  $stateProvider
    .state('base.admin.users', {
      url: '/users',
      abstract: true,
      template: '<div class="users-admin" ui-view></div>',
      controller: 'UsersAdminController as usersAdminCtrl'
    })
    .state('base.admin.users.list', {
      url: '/list',
      templateUrl: '/partials/admin/users/list_users.html',
      controller: 'ListUsersController as listUsersCtrl',
      resolve: ListUsersData
    });
};