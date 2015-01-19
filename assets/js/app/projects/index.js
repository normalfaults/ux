'use strict';

var angular = require('angular');

var ProjectsModule = angular.module('broker.projects', [])
  .controller('BaseProjectController', require('./base_project_controller'))
  .controller('NewProjectController', require('./new_project_controller'))
  .controller('EditProjectController', require('./edit_project_controller'))
  .controller('ProjectController', require('./project_controller'))
  .controller('ProjectUsersController', require('./project_users_controller'))
  .controller('ProjectServicesController', require('./project_services_controller'))
  .directive('projectForm', require('./project_form'))
  .directive('projectBox', require('./project_box_directive'))
  .factory('ProjectsResource', require('./projects_resource'))
  .factory('ProjectUsersResource', require('./project_users_resource'))
  .factory('ProjectQuestionsResource', require('./project_questions_resource'))
  .config(require('./routes'));

module.exports = ProjectsModule;