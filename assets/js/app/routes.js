'use strict';

/**@ngInject*/
module.exports = function($stateProvider, $urlRouterProvider, $locationProvider, USER_ROLES) {
  $urlRouterProvider.otherwise("/");

  $stateProvider
    .state('root', {
      url: "/",
      data: {
        authorizedRoles: [USER_ROLES.all]
      },
      controller: 'RootController'
    })
    // base state for our app
    // get data for header and left sidebar menu
    .state('base', {
      abstract: true,
      templateUrl: "/partials/base.html",
      data: {
        authorizedRoles: [USER_ROLES.user, USER_ROLES.admin]
      },
      resolve: {
        headerData: ["HeaderData", function(HeaderData) {
          return HeaderData.get();
        }],
        projects: ["Project", function(Project) {
          return Project.query();
        }],
        bundles: ["Bundle", function(Bundle) {
          return Bundle.query();
        }],
        applications: ["Application", function(Application) {
          return Application.query();
        }],
        solutions: ['Solution', function(Solution) {
          return Solution.query();
        }]
      },
      controller: "BaseCtrl"
    })
    // public base state for our app
    .state('publicbase', {
      abstract: true,
      templateUrl: "/partials/base.html",
      data: {
        authorizedRoles: [USER_ROLES.all]
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
    .state('logout', {
      url: "^/logout",
      data: {
        authorizedRoles: [USER_ROLES.all]
      },
      controller: "LogoutController"
    })
    // base state with solution statistics
    .state('base.solutionBase', {
      template: "<ui-view></ui-view>",
      data: {
        authorizedRoles: [USER_ROLES.user, USER_ROLES.admin]
      },
      controller: "SolutionBaseCtrl"
    })
    // solution dashboard
    .state('base.solutionBase.dashboard', {
      url: "^/dashboard",
      data: {
        wrapperCssClass: "dashboard-bg",
        authorizedRoles: [USER_ROLES.user, USER_ROLES.admin]
      },
      templateUrl: "/partials/dashboard.html",
      resolve: {
        alerts: ["DataService", function(DataService) {
          return DataService.getAlerts();
        }]
      },
      controller: "DashboardCtrl"
    })
    // solution manage page
    .state('base.solutionBase.manage', {
      url: "^/manage",
      templateUrl: "/partials/manage.html",
      data: {
        authorizedRoles: [USER_ROLES.user, USER_ROLES.admin]
      },
      resolve: {
        recentOrders: ["Order", function(Order) {
          return Order.getRecentOrders();
        }],
        recentUsers: ["User", function(User) {
          return User.getRecentUsers();
        }],
        manageValues: ["DataService", function(DataService) {
          return DataService.getManageValues();
        }],
        alerts: ["DataService", function(DataService) {
          return DataService.getAlerts();
        }]
      },
      controller: "ManageCtrl"
    })
    // add new project for solution
    .state('base.newProject', {
      url: "^/project/new",
      templateUrl: "/partials/new-project.html",
      data: {
        authorizedRoles: [USER_ROLES.user, USER_ROLES.admin]
      },
      resolve: {
        projectQuestions: ["DataService", function(DataService) {
          return DataService.getProjectQuestions();
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
          return Project.get({id: $stateParams.projectId});
        }]
      },
      controller: "ProjectCtrl"
    })
    // service details
    .state('base.service', {
      url: "^/service/:serviceId",
      templateUrl: "/partials/service.html",
      data: {
        authorizedRoles: [USER_ROLES.user, USER_ROLES.admin]
      },
      resolve: {
        service: ['Service', "$stateParams", function(Service, $stateParams) {
          return Service.get({id: $stateParams.serviceId});
        }],
        viewValues: ['DataService', function(DataService) {
          return DataService.getMarketplaceValues();
        }]
      },
      controller: "ServiceCtrl"
    })
    // marketplace
    .state('base.marketplace', {
      url: "^/marketplace",
      templateUrl: "/partials/marketplace.html",
      data: {
        authorizedRoles: [USER_ROLES.user, USER_ROLES.admin]
      },
      resolve: {
        viewValues: ['DataService', function(DataService) {
          return DataService.getMarketplaceValues();
        }],
        services: ["Service", function(Service) {
          return Service.query();
        }]
      },
      controller: "MarketplaceCtrl"
    })
    // Search and Compare
    .state('base.searchAndCompare', {
      url: "^/search-and-compare",
      data: {
        authorizedRoles: [USER_ROLES.user, USER_ROLES.admin]
      }
    })
    .state('base.helpDesk', {
      url: "^/help-desk",
      data: {
        authorizedRoles: [USER_ROLES.user, USER_ROLES.admin]
      }
    })
    .state('base.orderHistory', {
      url: "^/order-history",
      data: {
        authorizedRoles: [USER_ROLES.user, USER_ROLES.admin]
      }
    })
    // create alert
    .state('base.createAlert', {
      url: "^/create-alert",
      templateUrl: "/partials/create-alert.html",
      data: {
        authorizedRoles: [USER_ROLES.user, USER_ROLES.admin]
      }
    });
  $locationProvider.html5Mode(true);
};