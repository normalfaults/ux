/*
 * Copyright (C) 2014 TopCoder Inc., All Rights Reserved.
 */

'use strict';

var angular = require('angular');

module.exports = angular.module('broker.controllers', [])
  // Initialize base data for all controllers
  .controller("BaseCtrl", ["$rootScope", "$scope", "$sce", "$state", "headerData", "projects", "bundles", "applications", "AuthService",
    function($rootScope, $scope, $sce, $state, headerData, projects, bundles, applications, AuthService) {
      $rootScope.$state = $state;
      $rootScope.headerData = headerData;
      $rootScope.projects = projects;
      $rootScope.bundles = bundles;
      $rootScope.applications = applications;

      headerData.$promise.then(function() {
        angular.forEach(headerData.notifications, function(item) {
          item.trustedHtml = $sce.trustAsHtml(item.text);
        });
      });
      projects.$promise.then(function() {
        angular.forEach(projects, function(project) {
          project.sref = "base.project(" + angular.toJson({projectId: project.id}) + ")";
        });
      });

      $rootScope.logout = function() {
        AuthService.logout();
      }

    }])
  // Controller for Dashboard view
  .controller('DashboardCtrl', ["$scope", "alerts",
    function($scope, alerts) {
      $scope.tab = "projects";
      $scope.alerts = alerts;
      $scope.showTab = function(tab) {
        $scope.tab = tab;
      };
    }])
  // Controller for Dashboard view
  .controller('SolutionBaseCtrl', ["$scope", "solutions",
    function($scope, solutions) {
      solutions.$promise.then(function() {

        var solution = solutions[0];
        $scope.solutions = solutions;
        $scope.solution = solutions[0];
        $scope.selectedStatistic = solution.statistics[0];
        $scope.selectInterval = function(stats) {
          $scope.selectedStatistic = stats;
        };
        $scope.showSolution = function(solution) {
          $scope.solution = solution;
          $scope.selectedStatistic = solution.statistics[0];
        };
      });
    }])
  // Controller for Manage view
  .controller('ManageCtrl', ["$scope", "recentOrders", "recentUsers", "manageValues", "alerts",
    function($scope, recentOrders, recentUsers, manageValues, alerts) {
      $scope.recentOrders = recentOrders;
      $scope.alerts = alerts;
      $scope.recentUsers = recentUsers;
      $scope.manageValues = manageValues;
    }])
  // Controller for New Project View
  .controller('NewProjectCtrl', ["$scope", "$state", "projectQuestions", "DataService",
    function($scope, $state, projectQuestions, DataService) {
      var pQuestions = projectQuestions,
          dataService = DataService,
          scope = $scope;

      $scope.project = $scope.project || {};

      pQuestions.$promise.then(function() {
        _.each(pQuestions, function(pQuestion){
          scope.project.project_answers = scope.project.project_answers || [];
          scope.project.project_answers.push({
            project_question_id: pQuestion.id,
            project_question: pQuestion
          })
        });
      });

      $scope.createProject = function() {
        dataService.createProject({project: scope.project}).$promise.then(function(){
          $state.go('base.solutionBase.dashboard', {}, {reload: true});
        });
      }
    }])
  // Controller for Project Details View
  .controller('ProjectCtrl', ["$scope", "project", "solutions",
    function($scope, project, solutions) {
      $scope.solution = solutions[0];
      $scope.solutions = solutions;
      $scope.project = project;
    }])
  // Controller for Service Details View
  .controller('ServiceCtrl', ["$scope", "$sce", "service", "viewValues",
    function($scope, $sce, service, viewValues) {
      $scope.service = service;
      $scope.viewValues = viewValues;
      $scope.tab = "feature";
      $scope.setTab = function(tab) {
        $scope.tab = tab;
      };
      service.feature = $sce.trustAsHtml(service.feature);
      service.specification = $sce.trustAsHtml(service.specification);
      service.review = $sce.trustAsHtml(service.review);
    }])
  // Controller for Marketplace View
  .controller('MarketplaceCtrl', ["$scope", "$filter", "services", "viewValues",
    function($scope, $filter, services, viewValues) {
      $scope.applicationServices = $filter('filter')(services, {isApplication: true});
      $scope.webServices = $filter('filter')(services, {isWebService: true});
      $scope.blueprintServices = $filter('filter')(services, {isBlueprint: true});
      $scope.services = services;
      $scope.viewValues = viewValues;
    }])
  .controller('LoginController', ['$scope', '$location', 'AuthService', 'ROUTES',
    function ($scope, $location, AuthService, ROUTES) {

      // If the user is already logged in, take them to the default route.
      if (AuthService.isAuthenticated()) {
        $location.path(ROUTES.default);
      }

      $scope.login = function () {
        var credentials = {
          staff: {
            email: $scope.email,
            password: $scope.password
          }
        };

        // @todo Add optional to redirect back to where they were instead of always going to dashboard.
        AuthService.login(credentials).success(function() {
          $location.path(ROUTES.default)
        });

      };
    }])
  .controller('LogoutController', ['AuthService',
    function (AuthService) {
      AuthService.logout();
    }])
  .controller('RootController', ['AuthService', "$location", 'ROUTES',
    function(AuthService, $location, ROUTES) {
      if (AuthService.isAuthenticated()) {
        $location.path(ROUTES.default);
      } else {
        $location.path(ROUTES.login);
      }
    }
  ]);
