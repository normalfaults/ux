'use strict';
var NewProjectData = require('./new_project_controller').resolve;
var ProjectData = require('./project_controller').resolve;
var EditProjectData = require('./edit_project_controller').resolve;
var ProjectServicesData = require('./project_services_controller').resolve;

/**@ngInject*/
module.exports = function($stateProvider, USER_ROLES) {
  $stateProvider
    // Create Project
    .state('base.newProject', {
      url: "^/project/new",
      templateUrl: "/partials/projects/new-project.html",
      resolve: NewProjectData,
      controller: "NewProjectController as newProjectCtrl"
    })
    // Project
    .state('base.project', {
      url: "^/project/:projectId",
      templateUrl: "/partials/projects/project.html",
      resolve: ProjectData,
      controller: "ProjectController as projectCtrl"
    })
    // Edit Project
    .state('base.project.edit', {
      url: "^/project/:projectId/edit",
      templateUrl: "/partials/projects/edit-project.html",
      resolve: EditProjectData,
      controller: "EditProjectController as editProjectCtrl"
    })
    // Add User to Project
    .state('base.project.addUser', {
      url: "^/project/:projectId/add-user",
      /**@ngInject**/
      onEnter: function($stateParams, $state, JellyfishModal, project) {

        // When the modal is resolved or rejected we want to transition
        // back to the project page.
        var onClose = function() {
          return $state.transitionTo("base.project", $stateParams);
        };

        JellyfishModal.open({
          id: 'add-users',
          templateUrl: '/partials/projects/add-users-modal.html',
          controller: 'ProjectUsersController as projectUsersCtrl',
          /**
           * This is somewhat of a hack, because of using string based controller instantiation in the modal
           * the ui-router scope does not cascade into onEnter.  We use resolve to effectively inject the data
           * back in.
           */
          resolve: {
            project: function() {
              return project;
            }

          }
        }).result.then(onClose, onClose);
      }
    })
    // Add Service to Project
    .state('base.project.addService', {
      url: "^/project/:projectId/add-service",
      resolve: ProjectServicesData,
      /**@ngInject**/
      onEnter: function($stateParams, $state, JellyfishModal, currentUser, project, products, categories) {

        // When the modal is resolved or rejected we want to transition
        // back to the project page.
        var onClose = function() {
          return $state.transitionTo("base.project", $stateParams);
        };

        JellyfishModal.open({
          id: 'app-services',
          templateUrl: '/partials/projects/add-services-modal.html',
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
        }).result.then(onClose, onClose);
      }
    });
};