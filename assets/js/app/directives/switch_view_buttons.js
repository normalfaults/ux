'use strict';

var $ = require('jquery');

/**@ngInject*/
function SwitchViewButtons() {
  return {
    restrict: 'E',
    template: [
      '<div class="switch-buttons text-right">',
      '<a class="btn btn-link grid-switch active" ng-click="showGrid()"><i class="fa fa-fw fa-lg fa-th"></i></a>',
      '<a class="btn btn-link list-switch" ng-click="showList()"><i class="fa fa-fw fa-lg fa-bars"></a>',
      '</div>'
    ].join(""),
    scope: {
      gridView: "=",
      listView: "="
    },
    replace: true,
    link: function(scope, element) {
      scope.showList = function() {
        $(scope.gridView).addClass('hide');
        $(scope.listView).removeClass('hide');
        $(element).find(".list-switch").addClass('active');
        $(element).find(".grid-switch").removeClass('active');
      };
      scope.showGrid = function() {
        $(scope.gridView).removeClass('hide');
        $(scope.listView).addClass('hide');
        $(element).find(".grid-switch").addClass('active');
        $(element).find(".list-switch").removeClass('active');
      };
    }
  };
}

module.exports = SwitchViewButtons;
