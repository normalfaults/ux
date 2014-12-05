'use strict';

function FixBoxesHeight() {
  return {
    restrict: 'A',
    link: function(scope, element) {
      element.ready(function() {
        var fixHeight = function() {
          var maxHeight = 0;
          var $boxes = $(element).find('.boxes');

          $boxes.each(function () {
            maxHeight = Math.max(maxHeight, $(this).height());
          });
          $boxes.height(maxHeight);
        };
        scope.$watch("assignments", function() {
          fixHeight();
        });

      });
    }
  };
}

module.exports = FixBoxesHeight;
