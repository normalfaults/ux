'use strict';

/**@ngInject*/
module.exports = function($rootScope, $log, fixSidebar) {
  $rootScope.sideBarExpanded = true;
  // catch any error in resolve in state
  $rootScope.$on('$stateChangeError', function(event, toState, toParams, fromState, fromParams, error) {
    $log.error(error);
    alert('Error occurred: ' + (error.statusText || error.message));
  });
  $rootScope.$on('$stateChangeSuccess', function() {
    $("html, body").animate({scrollTop: 0}, 200);
  });
  $(window).resize(fixSidebar);
  // auto close popup on body click
  $("body").click(function(e) {
    var $target = $(e.target);
    if ($target.closest('.drop-down-box').length && $target.closest('.keep-drop-down-open').length) {
      return false;
    }
    $(".drop-down-box").addClass('hide');
  });
};