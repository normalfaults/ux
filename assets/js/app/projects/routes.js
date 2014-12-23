'use strict';
var NewProjectData = require('./new_project_controller').resolve;
var ProjectData = require('./project_controller').resolve;
var EditProjectData = require('./edit_project_controller').resolve;
var ProjectServicesData = require('./project_services_controller').resolve;

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
    })
    // Add Service to Project
    .state('base.project.addService', {
      url: "^/project/:projectId/add-service",
      resolve: ProjectServicesData,
      /**@ngInject**/
      onEnter: function($stateParams, $state, $modal, currentUser, project, products, categories) {
        $modal.open({
          templateUrl: 'projects/add-services-modal.html',
          controller: 'ProjectServicesController as projectServicesCtrl',
          size: 'lg',
          /**
           * This is somewhat of a hack, because of using string based controller instantiation in the modal
           * the ui-router scope does not cascade into onEnter.  We use resolve to effectively inject the data
           * back in.
           */
          resolve: {
            currentUser: function() {
              return currentUser;
            },
            project: function() {
              return project;
            },
            products: function() {
              return products;
            },
            categories: function() {
              return categories;
            }

          }
        }).result.then(function(result) {
            if (result) {
              return $state.transitionTo("base.project");
            }
          });
      }
    });
};