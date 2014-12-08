'use strict';

// TODO: This controller is dealing with too much data

/**@ngInject*/
function BaseController($rootScope, $scope, $sce, $state, headerData, projects, bundles, applications, AuthService, currentUser) {
  $rootScope.$state = $state;
  $rootScope.headerData = headerData;
  $rootScope.projects = projects;
  $rootScope.bundles = bundles;
  $rootScope.applications = applications;
  $rootScope.currentUser = currentUser;

  angular.forEach(headerData.notifications, function(item) {
    item.trustedHtml = $sce.trustAsHtml(item.text);
  });

  angular.forEach(projects, function(project) {
    project.sref = "base.project(" + angular.toJson({projectId: project.id}) + ")";
  });

  $rootScope.logout = function() {
    AuthService.logout();
  }
}

BaseController.resolve = {
  /**@ngInject*/
  headerData: function(HeaderData) {
    return HeaderData.get().$promise;
  },
  /**@ngInject*/
  projects: function(Project) {
    return Project.query().$promise;
  },
  /**@ngInject*/
  bundles: function(Bundle) {
    return Bundle.query().$promise;
  },
  /**@ngInject*/
  applications: function(Application) {
    return Application.query().$promise;
  },
  /**@ngInject*/
  solutions: function(Solution) {
    return Solution.query().$promise;
  },
  /**@ngInject*/
  currentUser: function(User) {
    return User.getCurrentMember().$promise;
  }
};

module.exports = BaseController;
