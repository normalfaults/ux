'use strict';

var angular = require('angular');

var ProjectsModule = angular.module('broker.projects', [])
  .controller('NewProjectController', require('./new_project_controller'))
  .controller('ProjectController', require('./project_controller'))
  .controller('ProjectUsersController', require('./project_users_controller'))
  .factory('Project', require('./project'))
  .config(require('./routes'));

module.exports = ProjectsModule;
