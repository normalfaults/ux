'use strict';

var $ = require('jquery');

/**@ngInject*/
function SetWidth($rootScope) {
  return {
    restrict: 'A',
    link: function(scope, element) {
      var checkClass = function() {
        if ($rootScope.sideBarExpanded) {
          $(element).addClass("left-184").removeClass("left-74");
        } else {
          $(element).removeClass("left-184").addClass("left-74");
        }
      };
      checkClass();
      $rootScope.$watch("sideBarExpanded", function(oldVal, newVal) {
        if (oldVal !== newVal) {
          checkClass();
        }
      });
    }
  };
}

module.exports = SetWidth;
