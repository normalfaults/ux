'use strict';

/**@ngInject*/
module.exports = function($stateProvider, $urlRouterProvider, $locationProvider, USER_ROLES) {
  $urlRouterProvider.otherwise("/dashboard");

  $stateProvider
    // base state for our app
    // get data for header and left sidebar menu
    .state('base', {
      url: "/app",
      abstract: true,
      templateUrl: "/partials/base.html",
      data: {
        authorizedRoles: [USER_ROLES.user]
      },
      resolve: {
        headerData: ["HeaderData", function(HeaderData) {
          return HeaderData.get().$promise;
        }],
        projects: ["Project", function(Project) {
          return Project.query().$promise;
        }],
        bundles: ["Bundle", function(Bundle) {
          return Bundle.query().$promise;
        }],
        applications: ["Application", function(Application) {
          return Application.query().$promise;
        }],
        solutions: ['Solution', function(Solution) {
          return Solution.query().$promise;
        }]
      },
      controller: "BaseCtrl"
    })
    // base state for our app
    // get data for header and left sidebar menu
    .state('publicbase', {
      url: "/app",
      abstract: true,
      templateUrl: "/partials/base.html",
      data: {
        authorizedRoles: [USER_ROLES.user]
      }
    })
    .state('publicbase.login', {
      url: "^/login",
      templateUrl: '/partials/login.html',
      data: {
        authorizedRoles: [USER_ROLES.all]
      },
      controller: "LoginController"
    })
    // base state with solution statistics
    .state('base.solutionBase', {
      url: "/",
      template: "<ui-view></ui-view>",
      data: {
        authorizedRoles: [USER_ROLES.user]
      },
      controller: "SolutionBaseCtrl"
    })
    // solution dashboard
    .state('base.solutionBase.dashboard', {
      url: "^/dashboard",
      data: {
        wrapperCssClass: "dashboard-bg",
        authorizedRoles: [USER_ROLES.user]
      },
      templateUrl: "/partials/dashboard.html",
      resolve: {
        alerts: ["DataService", function(DataService) {
          return DataService.getAlerts().$promise;
        }],
        alertPopup: ["DataService", function(DataService) {
          return DataService.getAlertPopup().$promise;
        }]
      },
      controller: "DashboardCtrl"
    })
    // solution manage page
    .state('base.solutionBase.manage', {
      url: "^/manage",
      templateUrl: "/partials/manage.html",
      data: {
        authorizedRoles: [USER_ROLES.user]
      },
      resolve: {
        recentOrders: ["Order", function(Order) {
          return Order.getRecentOrders().$promise;
        }],
        recentUsers: ["User", function(User) {
          return User.getRecentUsers().$promise;
        }],
        manageValues: ["DataService", function(DataService) {
          return DataService.getManageValues().$promise;
        }],
        alerts: ["DataService", function(DataService) {
          return DataService.getAlerts().$promise;
        }]
      },
      controller: "ManageCtrl"
    })
    // add new project for solution
    .state('base.newProject', {
      url: "^/project/new",
      templateUrl: "/partials/new-project.html",
      data: {
        authorizedRoles: [USER_ROLES.user]
      },
      resolve: {
        projectQuestions: ["DataService", function(DataService) {
          return DataService.getProjectQuestions().$promise;
        }],
        createProject: ["DataService", function(DataService) {
          return DataService.createProject;
        }]
      },
      controller: "NewProjectCtrl"
    })
    // project details
    .state('base.project', {
      url: "^/project/:projectId",
      templateUrl: "/partials/project.html",
      resolve: {
        project: ['Project', "$stateParams", function(Project, $stateParams) {
          return Project.get({id: $stateParams.projectId}).$promise;
        }]
      },
      controller: "ProjectCtrl"
    })
    // service details
    .state('base.service', {
      url: "^/service/:serviceId",
      templateUrl: "/partials/service.html",
      data: {
        authorizedRoles: [USER_ROLES.user]
      },
      resolve: {
        service: ['Service', "$stateParams", function(Service, $stateParams) {
          return Service.get({id: $stateParams.serviceId}).$promise;
        }],
        viewValues: ['DataService', function(DataService) {
          return DataService.getMarketplaceValues().$promise;
        }]
      },
      controller: "ServiceCtrl"
    })
    // marketplace
    .state('base.marketplace', {
      url: "^/marketplace",
      templateUrl: "/partials/marketplace.html",
      data: {
        authorizedRoles: [USER_ROLES.user]
      },
      resolve: {
        viewValues: ['DataService', function(DataService) {
          return DataService.getMarketplaceValues().$promise;
        }],
        services: ["Service", function(Service) {
          return Service.query().$promise;
        }]
      },
      controller: "MarketplaceCtrl"
    })
    // Search and Compare
    .state('base.searchAndCompare', {
      url: "^/search-and-compare",
      data: {
        authorizedRoles: [USER_ROLES.user]
      }
    })
    .state('base.helpDesk', {
      url: "^/help-desk",
      data: {
        authorizedRoles: [USER_ROLES.user]
      }
    })
    .state('base.orderHistory', {
      url: "^/order-history",
      data: {
        authorizedRoles: [USER_ROLES.user]
      }
    })
    // create alert
    .state('base.createAlert', {
      url: "^/create-alert",
      templateUrl: "/partials/create-alert.html",
      data: {
        authorizedRoles: [USER_ROLES.user]
      }
    });
  $locationProvider.html5Mode(true);
};