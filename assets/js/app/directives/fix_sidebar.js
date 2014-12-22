'use strict';

/**@ngInject*/
function FixSidebar(fixSidebar, $timeout) {
  return {
    //restrict: 'A',
    //link: function($scope, $element) {
    //  $scope.$watch(function() {
    //    return $element.height();
    //  }, function(newValue, oldValue) {
    //    if (newValue !== oldValue) {
    //      fixSidebar();
    //    }
    //  });
    //
    //  // @todo This is a hack, but it gets us out of the render call and defers it till after the DOM
    //  // is done loading, wich lets the sidebar/footer be set correctly.
    //  $timeout(function() {
    //    fixSidebar();
    //  });
    //}
  };
}

module.exports = FixSidebar;
