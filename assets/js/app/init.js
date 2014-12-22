'use strict';

/**@ngInject*/
module.exports = function($http, $rootScope, $log, $location, fixSidebar, AuthService, User, Session, $urlRouter, ROUTES, $state) {

  $http.defaults.headers.common['Accept'] = 'application/json, text/javascript';
  $http.defaults.headers.common['Content-Type'] = 'application/json; charset=utf-8';

  // Allows us to have a different host for the API and still have cookies set correctly.
  // Requires CORS setup on API endpoints, as well as non wildcard values.
  $http.defaults.withCredentials = true;

  $rootScope.sideBarExpanded = true;

  $(window).resize(fixSidebar);

  // auto close popup on body click
  $("body").click(function(e) {
    var $target = $(e.target);
    if ($target.closest('.drop-down-box').length && $target.closest('.keep-drop-down-open').length) {
      return false;
    }
    $(".drop-down-box").addClass('hide');
  });

  // On init we check the current user to see if we are already authenticated.
  // If we are, we create the session and and sync the routes.
  var currentMember = User.getCurrentMember();
  currentMember.$promise.then(function(data) {
    Session.create(data.email, data.role);
    $urlRouter.sync();
  }, function() {
    $location.path(ROUTES.login);
    $urlRouter.sync();
  });

  // Authorization and Authentication when switching Pages.
  $rootScope.$on('$stateChangeStart', function (event, next) {

    // Block all routing until the current user is loaded for the first time.
    // After authorization check because public routes do not need currentUser to verify.
    if (!currentMember.$resolved) {
      event.preventDefault();
      return;
    }
    var authorizedRoles = next.data.authorizedRoles;
    if (!AuthService.isAuthorized(authorizedRoles)) {
      $location.path(ROUTES.dashboard);
    }
  });

  // catch any error in resolve in state
  $rootScope.$on('$stateChangeError', function(event, toState, toParams, fromState, fromParams, error) {
    if (401 === error.status) {
      $state.transitionTo('publicbase.logout');
    } else if (403 === error.status) {
      // This is the dashboard route.  Ugly.
      // @todo Add message or notice on redirect to give access denied error.
      //       Also a bit strange when a user already on dashboard, might need a scrollTop.
      if ('base.dashboard' !== fromState.name) {
        $state.transitionTo('base.dashboard');
      } else {
        $log.error('Redirect to /dashboard loop halted.')
        // Keep the app from being stuck in a loop requesting broken dashboard data.
        event.preventDefault();
        // TODO: Redirect instead to a "We're sorry." error page.
      }
    } else {
      //$log.error(error);
      $log.error('Unhandled State Change Error occurred: ' + (error.statusText || error.message));
      //event.preventDefault();
      $state.transitionTo('base.dashboard');
    }
  });

  $rootScope.$on('$stateChangeSuccess', function() {
    $("html, body").animate({scrollTop: 0}, 200);
  });
};
