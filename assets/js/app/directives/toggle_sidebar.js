'use strict';

var $ = require('jquery');

/**@ngInject*/
function ToggleSidebar($rootScope) {
  return {
    restrict: 'A',
    link: function(scope, element) {
      var $ele = $(element);
      $ele.find(".side-arrow").click(function() {
        $ele.toggleClass('absolute-nav');
        if ($ele.hasClass("absolute-nav")) {
          $ele.find(".arrows-container").hide();
          $ele.find(".minimize-icon").removeClass("fa-angle-left")
              .addClass("fa-angle-right");
          $rootScope.sideBarExpanded = false;
        } else {
          $ele.find(".arrows-container").show();
          $ele.find(".minimize-icon").removeClass("fa-angle-right")
              .addClass("fa-angle-left");
          $rootScope.sideBarExpanded = true;
        }
        $rootScope.$apply();
      });
    }
  };
}

module.exports = ToggleSidebar;
