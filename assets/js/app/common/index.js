'use strict';

var angular = require('angular');

module.exports = angular.module('broker.common', [
  require('./exception_handler').name,
  require('./constants').name
])
  .factory('ApiResource', require('./api_resource'))
  .factory('DataService', require('./data_service'))
  .factory('HeaderData', require('./header_data'))
  .factory('fixSidebar', require('./fix_sidebar'))
  .factory('httpInterceptor', require('./http_interceptor'))
  .config(require('./routes'));
