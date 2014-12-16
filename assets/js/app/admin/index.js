'use strict';

var angular = require('angular');

var AdminModule = angular.module('broker.admin', [
  require('./products').name
])
  .controller('AdminController', require('./admin_controller'))
  .controller('ProductAdminController', require('./product_admin_controller'))
  .controller('ProjectQuestionsController', require('./project_questions_controller'))
  .factory('ProjectQuestion', require('./project_question'))
  .config(require('./routes'));

module.exports = AdminModule;
