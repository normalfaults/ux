'use strict';

var NewProjectData = require('./new_project_controller').resolve,
    ProjectData = require('./project_controller').resolve,
    EditProjectData = require('./edit_project_controller').resolve;

/**@ngInject*/
module.exports = function($stateProvider, USER_ROLES) {
  $stateProvider
    // add new project for solution
    .state('base.newProject', {
      url: "^/project/new",
      templateUrl: "/partials/projects/new-project.html",
      resolve: NewProjectData,
      controller: "NewProjectController as newProjectCtrl"
    })
    // add new project for solution
    .state('base.editProject', {
      url: "^/project/:id/edit",
      templateUrl: "/partials/projects/edit-project.html",
      resolve: EditProjectData,
      controller: "EditProjectController as editProjectCtrl"
    })
    // project details
    .state('base.project', {
      url: "^/project/:projectId",
      templateUrl: "/partials/projects/project.html",
      resolve: ProjectData,
      controller: "ProjectController as projectCtrl"
    });
};
