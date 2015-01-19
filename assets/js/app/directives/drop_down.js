'use strict';

var $ = require('jquery');

function DropDown() {
  return {
    restrict: 'A',
    link: function(scope, element, attrs) {
      $(element).click(function() {

        var dropDownActiveEl = $(".drop-down-active");

        dropDownActiveEl.removeClass("drop-down-active");
        $(this).next().addClass("drop-down-active").removeClass('hide');
        $(".drop-down-box:not(.drop-down-active)").addClass('hide');
        if (attrs.fixArrow) {
          var w = $(element).width() - 16;
          $('.drop-down-active .icon-arrow').css({left: w + "px"});
        }
        return false;
      });
    }
  };
}

module.exports = DropDown;
