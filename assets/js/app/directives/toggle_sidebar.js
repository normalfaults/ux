'use strict';

/**@ngInject*/
function ToggleSidebar($rootScope) {
  return {
    restrict: 'A',
    link: function(scope, element) {
      var $ele = $(element);
      $ele.find(".side-arrow").click(function() {
        $ele.toggleClass('absolute-nav');
        if ($ele.hasClass("absolute-nav")) {
          $ele.find("ul li").removeClass("current");
          $ele.find("ul li a.li-links span.arrow-down")
            .removeClass("arrow-down")
            .addClass("arrow-right");
          $rootScope.sideBarExpanded = false;
        } else {
          $rootScope.sideBarExpanded = true;
        }
        $rootScope.$apply();
      });
    }
  };
}

module.exports = ToggleSidebar;
