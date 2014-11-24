'use strict';

var angular = require('angular');

module.exports = angular.module('broker.common.exceptions', [])

/**@ngInject*/
  .config(function($provide) {

  /**@ngInject*/
  $provide.decorator("$exceptionHandler", function($delegate) {
    return function(exception, cause) {
      alert("Error occurred: " + exception);
      $delegate(exception, cause);
    };
  });
});



