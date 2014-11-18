'use strict';

var angular = require('angular');

var module = angular.module('broker.common.exceptions', []);

/**@ngInject*/
module.config(function($provide) {

  /**@ngInject*/
  $provide.decorator("$exceptionHandler", function($delegate) {
    return function(exception, cause) {
      alert("Error occurred: " + exception);
      $delegate(exception, cause);
    };
  });
});

module.exports = module;