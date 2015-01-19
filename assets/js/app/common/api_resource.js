'use strict';

var apiRoutes = require('apiRoutes');
var _ = require('lodash');

/**@ngInject*/
function apiResource(APP_CONFIG) {
  // Get the data from the config if it has been passed in, otherwise use the default
  // from the apiRoutes.json file.
  var apiBasePath = APP_CONFIG.apiBasePath || apiRoutes.basePath;

  // Remove trailing slash if it exists.
  apiBasePath = apiBasePath.replace(/\/$/, "");
  return function(apiResourceKey) {
    if (_.isEmpty(apiResourceKey)) {
      return apiBasePath;
    }
    return apiBasePath + apiRoutes.routes[apiResourceKey];
  };
}

module.exports = apiResource;
