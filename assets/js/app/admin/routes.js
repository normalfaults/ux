'use strict';

var AdminData = require('./admin_controller').resolve,
    ProductData = require('./product_admin_controller').resolve,
    ProjectQuestionData = require('./project_questions_controller').resolve;

/**@ngInject*/
module.exports = function($stateProvider, USER_ROLES) {
  $stateProvider
    .state('base.admin', {
      url: '/admin',
      abstract: true,
      controller: 'AdminController as admin',
      template: '<div ui-view></div>',
      data: {
        authorizedRoles: [USER_ROLES.admin]
      },
      resolve: AdminData
    }).state('base.admin.products', {
      url: '/admin/products',
      controller: 'ProductAdminController as productAdmin',
      resolve: ProductData
    }).state('base.admin.project_questions', {
        url: '/admin/project_questions',
        templateUrl: "/partials/project_questions.html",
        controller: 'ProjectQuestionsController as projectQuestion',
        resolve: ProjectQuestionData
    })
}
