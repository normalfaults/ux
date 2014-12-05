'use strict';

// TODO: This controller is dealing with too much data

/**@ngInject*/
function BaseController($rootScope, $scope, $sce, $state, headerData, projects, bundles, applications, AuthService) {
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
}

BaseController.resolve = {
  /**@ngInject*/
  headerData: function(HeaderData) {
    return HeaderData.get();
  },
  /**@ngInject*/
  projects: function(Project) {
    return Project.query();
  },
  /**@ngInject*/
  bundles: function(Bundle) {
    return Bundle.query();
  },
  /**@ngInject*/
  applications: function(Application) {
    return Application.query();
  },
  /**@ngInject*/
  solutions: function(Solution) {
    return Solution.query().$promise;
  }
};

module.exports = BaseController;
