'use strict';

/**@ngInject*/
module.exports = function($rootScope, $log, $location, fixSidebar, AuthService, AUTH_EVENTS) {
  $rootScope.sideBarExpanded = true;
  // catch any error in resolve in state
  $rootScope.$on('$stateChangeError', function(event, toState, toParams, fromState, fromParams, error) {
    $log.error(error);
    alert('Error occurred: ' + (error.statusText || error.message));
  });
  $rootScope.$on('$stateChangeSuccess', function() {
    $("html, body").animate({scrollTop: 0}, 200);
  });
  $(window).resize(fixSidebar);
  // auto close popup on body click
  $("body").click(function(e) {
    var $target = $(e.target);
    if ($target.closest('.drop-down-box').length && $target.closest('.keep-drop-down-open').length) {
      return false;
    }
    $(".drop-down-box").addClass('hide');
  });

  $rootScope.$on('$stateChangeStart', function (event, next) {
    var authorizedRoles = next.data.authorizedRoles;
    if (!AuthService.isAuthorized(authorizedRoles)) {
      event.preventDefault();

      // @see https://github.com/angular/angular.js/issues/9607
      $rootScope.$evalAsync(function() {
        $location.path('/login');
      });
      //if (AuthService.isAuthenticated()) {
      //  console.warn('authenticated');
      //  // user is not allowed
      //  //$rootScope.$broadcast(AUTH_EVENTS.notAuthorized);
      //  $location.path('/login');
      //} else {
      //  console.warn('else');
      //  // user is not logged in
      //  //$rootScope.$broadcast(AUTH_EVENTS.notAuthenticated);
      //  $location.path('/login');
      //}
    }
  });
};