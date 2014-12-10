'use strict';

function ExpandArrow() {
  return {
    restrict: 'A',
    link: function(scope, element) {
      var $ele = $(element);
      // Allow clicking on the head link element instead of a tiny arrow
      $ele.find('> a').click(function() {
        $ele.toggleClass("current");
        if ($ele.hasClass("current")) {
          $(this).find('.arrows').removeClass("arrow-right").addClass("arrow-down");
        } else {
          $(this).find('.arrows').removeClass("arrow-down").addClass("arrow-right");
        }
      });
    }
  };
}

module.exports = ExpandArrow;
