'use strict';

/**@ngInject*/
function HttpInterceptor($q, $location, ROUTES) {

  return function (promise) {
    var success = function (response) {
      return response;
    };

    var error = function (response) {
      if (response.status === 401) {
        $location.path(ROUTES.logout);
      }

      return $q.reject(response);
    };

    return promise.then(success, error);
  };
}

module.exports = HttpInterceptor;
