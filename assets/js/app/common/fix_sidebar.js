'use strict';

/**@ngInject*/
function FixSidebar() {
  return function() {
    var $nav = $('.side-nav');
    var $footer = $('footer');

    // If the nav is shown (only shown when logged in) we resize the nav to the correct size based
    // on page content.
    if ($nav && $nav.is(":visible")) {
      $nav.height(500);


      var headerAndFooterHeight = $('header').outerHeight() + $footer.outerHeight();
      var mainContentEl = $('.main-content');

      if ((mainContentEl.height() + headerAndFooterHeight) < document.documentElement.clientHeight) {
        $nav.height(document.documentElement.clientHeight - headerAndFooterHeight);
        $footer.css('position', 'absolute');
      } else {
        $nav.height(mainContentEl.height());
        $footer.css('position', '');
      }
    } else {
      // If there is no visible sidebar, we set the footer to absolute to make sure it stays on the bottom.
      $footer.css('position', 'absolute');
    }
  };
}

module.exports = FixSidebar;
