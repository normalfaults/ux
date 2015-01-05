'use strict';

var ListUsersData = require('./list_users_controller').resolve;
var AddUserData = require('./add_user_controller').resolve;

/**@ngInject*/
module.exports = function($stateProvider) {
  $stateProvider
    .state('base.admin.users', {
      url: '/users',
      abstract: true,
      templateUrl: '/partials/admin/users/base.html',
      controller: 'UsersAdminController as usersAdminCtrl'
    })
    .state('base.admin.users.list', {
      url: '/list',
      templateUrl: '/partials/admin/users/list_users.html',
      controller: 'ListUsersController as listUsersCtrl',
      resolve: ListUsersData
    })
    .state('base.admin.users.add', {
      url: '/add',
      templateUrl: '/partials/admin/users/add_user.html',
      controller: 'AddUserController as addUserCtrl',
      resolve: AddUserData
    });
};