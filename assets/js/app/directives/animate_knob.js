'use strict';

require('jquery-knob');

/**@ngInject*/
function AnimateKnob($interval) {
  return {
    restrict: 'A',
    link: function(scope, element) {
      element.ready(function() {
        var $element = $(element);
        var intervalId = null;
        var animate = function() {
          var targetValue = parseInt($element.attr("data-target-value"));
          if (!targetValue) {
            return;
          }
          $element.knob({
            'draw': function() {
              var $this = $(this.i);
              $this.val(this.cv + '%');
              $this.css({
                "font-family": "SourceSansPro_Regular",
                "font-size": "42px",
                "color": "#0a4684",
                "font-weight": "normal",
                "display": "inline-block"
              });
              $this.on("focus", function() {
                $this.parent().click();
              });
            }
          });
          if (intervalId) {
            $interval.cancel(intervalId);
            intervalId = null;
          }
          var currentValue = 0;
          intervalId = $interval(function() {
            currentValue += 1;
            $element.val(currentValue).trigger('change');
            if (currentValue === targetValue) {
              $interval.cancel(intervalId);
              intervalId = null;
            }
            if (currentValue === 100) {
              $element.css({
                "width": "101px",
                "margin-left": "-127px"
              });
            }
          }, 10);
        };
        scope.$watch("selectedStatistic", function(newValue, oldValue) {
          if (newValue !== oldValue) {
            animate();
          }
        });
        scope.$watch("assignments", function() {
          animate();
        });

      });
    }
  };
}

module.exports = AnimateKnob;
