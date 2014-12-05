'use strict';

function ExpandArrow() {
  return {
    restrict: 'A',
    link: function(scope, element) {
      var $ele = $(element);
      $ele.find(".arrows").click(function() {
        $ele.toggleClass("current");
        if ($ele.hasClass("current")) {
          $(this).removeClass("arrow-right").addClass("arrow-down");
        } else {
          $(this).removeClass("arrow-down").addClass("arrow-right");
        }
      });
    }
  };
}

module.exports = ExpandArrow;
