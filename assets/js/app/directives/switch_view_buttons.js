'use strict';

/**@ngInject*/
function SwitchViewButtons(fixSidebar) {
  return {
    restrict: 'E',
    template: [
      '<span class="switch-btns fr">',
      '<span class="btn-active js-grid-btn"><a href="javascript:;" class="icon-list-btn" ng-click="showGrid()"></a></span>',
      '<span class="btn-def js-list-btn"><a href="javascript:;" class="icon-grid-btn" ng-click="showList()"></a></span>',
      '</span>'
    ].join(""),
    scope: {
      gridView: "=",
      listView: "="
    },
    link: function(scope, element) {
      scope.showList = function() {
        $(scope.gridView).addClass('hide');
        $(scope.listView).removeClass('hide');
        $(element).find(".js-list-btn").addClass('btn-active');
        $(element).find(".js-grid-btn").removeClass('btn-active');
        fixSidebar();
      };
      scope.showGrid = function() {
        $(scope.gridView).removeClass('hide');
        $(scope.listView).addClass('hide');
        $(element).find(".js-grid-btn").addClass('btn-active');
        $(element).find(".js-list-btn").removeClass('btn-active');
        fixSidebar();
      };
    }
  };
}

module.exports = SwitchViewButtons;
