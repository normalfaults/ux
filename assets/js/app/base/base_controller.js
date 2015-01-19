'use strict';

/**@ngInject*/
var BaseController = function($rootScope) {

  /**
   * Track the previous state and the parameters.  Helpful for use in controllers
   * which may be accessed from two different states.
   *
   * @todo Potentially store this data so on a page refresh we can set the state back correctly for the user.
   */
  $rootScope.previousState = null;
  $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
    $rootScope.previousState = fromState.name;
    $rootScope.previousStateParams = fromParams;
  });

};

BaseController.resolve = {

};

module.exports = BaseController;
