'use strict';

var $ = require('jquery');

function ExpandArrow() {
  return {
    restrict: 'A',
    link: function(scope, element) {
      var $ele = $(element);
      // Allow clicking on the head link element instead of a tiny arrow
      $ele.find('> a').click(function() {
        $ele.toggleClass("current");
        if ($ele.hasClass("current")) {
          $(this).find('.arrows').removeClass("fa-caret-right").addClass("fa-caret-down");
        } else {
          $(this).find('.arrows').removeClass("fa-caret-down").addClass("fa-caret-right");
        }
      });
    }
  };
}

module.exports = ExpandArrow;
