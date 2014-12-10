'use strict';

var AdminData = require('./admin_controller').resolve,
  ProductData = require('./product_admin_controller').resolve;

/**@ngInject*/
module.exports = function($stateProvider, USER_ROLES) {
  $stateProvider
    .state('base.admin', {
      controller: 'AdminController as admin',
      data: {
        authorizedRoles: [USER_ROLES.admin]
      },
      resolve: AdminData
    }).state('base.admin.products', {
      url: '/admin/products',
      controller: 'ProductAdminController as productAdmin',
      resolve: ProductData
    })
}
