'use strict';

var angular = require('angular');

var ProjectsModule = angular.module('broker.projects', [])
  .controller('NewProjectController', require('./new_project_controller'))
  .controller('EditProjectController', require('./edit_project_controller'))
  .controller('ProjectController', require('./project_controller'))
  .controller('ProjectUsersController', require('./project_users_controller'))
  .controller('ProjectServicesController', require('./project_services_controller'))
  .directive('projectForm', require('./project_form'))
  .factory('ProjectResource', require('./project_resource'))
  .factory('ProjectUserResource', require('./project_user_resource'))
  .factory('ProjectQuestionsResource', require('./project_questions_resource'))
  .config(require('./routes'));

module.exports = ProjectsModule;