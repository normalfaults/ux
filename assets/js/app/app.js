/*
 * Copyright (C) 2014 TopCoder Inc., All Rights Reserved.
 */

'use strict';

/**
 * Angular main application file
 *
 * @author Sky_
 * @version 1.0
 */
/*global angular */


// Declare app level module
angular
    .module('broker', [
        "ui.router",
        "ngResource",
        "angular-loading-bar",
        'ngAnimate',
        "ui.gravatar"
    ])
    .config(['$stateProvider', '$urlRouterProvider', '$locationProvider', '$provide',
        function ($stateProvider, $urlRouterProvider, $locationProvider, $provide) {
            $urlRouterProvider.otherwise("/dashboard");
            // show alert if an error occurs
            $provide.decorator("$exceptionHandler", ["$delegate", function ($delegate) {
                return function (exception, cause) {
                    alert("Error occurred: " + exception);
                    $delegate(exception, cause);
                };
            }]);

            $stateProvider
                // base state for our app
                // get data for header and left sidebar menu
                .state('base', {
                    url: "/app",
                    abstract: true,
                    templateUrl: "/partials/base.html",
                    resolve: {
                        headerData: ["HeaderData", function (HeaderData) {
                            return HeaderData.get().$promise;
                        }],
                        projects: ["Project", function (Project) {
                            return Project.query().$promise;
                        }],
                        bundles: ["Bundle", function (Bundle) {
                            return Bundle.query().$promise;
                        }],
                        applications: ["Application", function (Application) {
                            return Application.query().$promise;
                        }],
                        solutions: ['Solution', function (Solution) {
                            return Solution.query().$promise;
                        }]
                    },
                    controller: "BaseCtrl"
                })
                // base state with solution statistics
                .state('base.solutionBase', {
                    url: "/",
                    template: "<ui-view></ui-view>",
                    controller: "SolutionBaseCtrl"
                })
                // solution dashboard
                .state('base.solutionBase.dashboard', {
                    url: "^/dashboard",
                    data: {
                        wrapperCssClass: "dashboard-bg"
                    },
                    templateUrl: "/partials/dashboard.html",
                    resolve: {
                        alerts: ["DataService", function (DataService) {
                            return DataService.getAlerts().$promise;
                        }],
                        alertPopup: ["DataService", function (DataService) {
                            return DataService.getAlertPopup().$promise;
                        }]
                    },
                    controller: "DashboardCtrl"
                })
                // solution manage page
                .state('base.solutionBase.manage', {
                    url: "^/manage",
                    templateUrl: "/partials/manage.html",
                    resolve: {
                        recentOrders: ["Order", function (Order) {
                            return Order.getRecentOrders().$promise;
                        }],
                        recentUsers: ["User", function (User) {
                            return User.getRecentUsers().$promise;
                        }],
                        manageValues: ["DataService", function (DataService) {
                            return DataService.getManageValues().$promise;
                        }],
                        alerts: ["DataService", function (DataService) {
                            return DataService.getAlerts().$promise;
                        }]
                    },
                    controller: "ManageCtrl"
                })
                // add new project for solution
                .state('base.newProject', {
                    url: "^/project/new",
                    templateUrl: "/partials/new-project.html",
                    resolve: {
                        projectValues: ["DataService", function (DataService) {
                            return DataService.getProjectValues().$promise;
                        }]
                    },
                    controller: "NewProjectCtrl"
                })
                // project details
                .state('base.project', {
                    url: "^/project/:projectId",
                    templateUrl: "/partials/project.html",
                    resolve: {
                        project: ['Project', "$stateParams", function (Project, $stateParams) {
                            return Project.get({id: $stateParams.projectId }).$promise;
                        }]
                    },
                    controller: "ProjectCtrl"
                })
                // service details
                .state('base.service', {
                    url: "^/service/:serviceId",
                    templateUrl: "/partials/service.html",
                    resolve: {
                        service: ['Service', "$stateParams", function (Service, $stateParams) {
                            return Service.get({id: $stateParams.serviceId }).$promise;
                        }],
                        viewValues: ['DataService', function (DataService) {
                            return DataService.getMarketplaceValues().$promise;
                        }]
                    },
                    controller: "ServiceCtrl"
                })
                // marketplace
                .state('base.marketplace', {
                    url: "^/marketplace",
                    templateUrl: "/partials/marketplace.html",
                    resolve: {
                        viewValues: ['DataService', function (DataService) {
                            return DataService.getMarketplaceValues().$promise;
                        }],
                        services: ["Service", function (Service) {
                            return Service.query().$promise;
                        }]
                    },
                    controller: "MarketplaceCtrl"
                })
                // create alert
                .state('base.createAlert', {
                    url: "^/create-alert",
                    templateUrl: "/partials/create-alert.html"
                });
            $locationProvider.html5Mode(true);
        }])
    .run(["$rootScope", "$log", "fixSidebar", function ($rootScope, $log, fixSidebar) {
        $rootScope.sideBarExpanded = true;
        // catch any error in resolve in state
        $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, error) {
            $log.error(error);
            alert('Error occurred: ' + (error.statusText || error.message));
        });
        $rootScope.$on('$stateChangeSuccess', function () {
            $("html, body").animate({ scrollTop: 0 }, 200);
        });
        $(window).resize(fixSidebar);
        // auto close popup on body click
        $("body").click(function (e) {
            var $target = $(e.target);
            if ($target.closest('.drop-down-box').length  && $target.closest('.keep-drop-down-open').length) {
                return false;
            }
            $(".drop-down-box").hide();
        });
    }]);

