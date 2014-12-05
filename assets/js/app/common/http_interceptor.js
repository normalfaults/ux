'use strict';

/**@ngInject*/
function HttpInterceptor($q, $location, ROUTES) {

  return {
    responseError: function(error) {
      if (401 === error.status) {
        $location.path(ROUTES.logout);
      }

      return $q.reject(error);
    }
  };
}

module.exports = HttpInterceptor;
