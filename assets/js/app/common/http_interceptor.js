'use strict';

/**@ngInject*/
function HttpInterceptor($q, $location, ROUTES) {

  return {
    /**
     * See also the stateChangeError method which handles state change for
     * routes that have promises that need to be resolved first.
     */
    responseError: function(error) {
      if (401 === error.status) {
        $location.path(ROUTES.logout);
      }

      // @todo should at some point take them to an access denied page, or
      //       at the very least the default with a message.
      if (403 === error.status) {
        $location.path(ROUTES.default);
      }

      return $q.reject(error);
    }
  };
}

module.exports = HttpInterceptor;
