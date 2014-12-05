'use strict';

/**@ngInject*/
function FixSidebar(fixSidebar) {
  return {
    restrict: 'A',
    link: function(scope, element) {
      scope.$watch(function() {
        return $(element).height();
      }, function(newValue, oldValue) {
        if (newValue !== oldValue) {
          fixSidebar();
        }
      });
      element.ready(function() {
        fixSidebar();
      });
    }
  };
}

module.exports = FixSidebar;
