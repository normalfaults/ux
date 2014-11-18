/*
 * Copyright (C) 2014 TopCoder Inc., All Rights Reserved.
 */

'use strict';

var angular = require('angular');

module.exports = angular.module('broker.directives', [])
  // custom select control
  .directive('dropDown', [function() {
    return {
      restrict: 'A',
      link: function(scope, element, attrs) {
        $(element).click(function() {
          $(".drop-down-active").removeClass("drop-down-active");
          $(this).next().addClass("drop-down-active");
          $(".drop-down-box:not(.drop-down-active)").hide();
          $(".drop-down-active").toggle();
          if (attrs.fixArrow) {
            var w = $(element).width() - 16;
            $('.drop-down-active .icon-arrow').css({left: w + "px"});
          }
          return false;
        });
      }
    };
  }])
  // expand menu item in left sidebar
  .directive('expandArrow', [function() {
    return {
      restrict: 'A',
      link: function(scope, element) {
        var $ele = $(element);
        $ele.find(".arrows").click(function() {
          $ele.toggleClass("current");
          if ($ele.hasClass("current")) {
            $(this).removeClass("arrow-right").addClass("arrow-down");
          } else {
            $(this).removeClass("arrow-down").addClass("arrow-right");
          }
        });
      }
    };
  }])
  // fix left sidebar height
  .directive('fixSidebar', ["fixSidebar", function(fixSidebar) {
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
  }])
  // set proper class to main content if sidebar is expanded or collapsed
  .directive('setWidth', ["$rootScope", function($rootScope) {
    return {
      restrict: 'A',
      link: function(scope, element) {
        var checkClass = function() {
          if ($rootScope.sideBarExpanded) {
            $(element).addClass("left-184").removeClass("left-74");
          } else {
            $(element).removeClass("left-184").addClass("left-74");
          }
        };
        checkClass();
        $rootScope.$watch("sideBarExpanded", function(oldVal, newVal) {
          if (oldVal !== newVal) {
            checkClass();
          }
        });
      }
    };
  }])
  // expand or collapse left sidebar after arrow click
  .directive('toggleSidebar', ["$rootScope", function($rootScope) {
    return {
      restrict: 'A',
      link: function(scope, element) {
        var $ele = $(element);
        $ele.find(".side-arrow").click(function() {
          $ele.toggleClass('absolute-nav');
          if ($ele.hasClass("absolute-nav")) {
            $ele.find("ul li").removeClass("current");
            $ele.find("ul li a.li-links span.arrow-down")
              .removeClass("arrow-down")
              .addClass("arrow-right");
            $rootScope.sideBarExpanded = false;
          } else {
            $rootScope.sideBarExpanded = true;
          }
          $rootScope.$apply();
        });
      }
    };
  }])
  // transform form controls
  .directive('jqtransform', [function() {
    return {
      restrict: 'A',
      link: function(scope, element) {
        element.ready(function() {
          $(element).jqTransform({imgPath: '/images/forms/'});
        });
      }
    };
  }])
  // custom date picker
  .directive('datepicker', [function() {
    return {
      restrict: 'A',
      link: function(scope, element) {
        var $ele = $(element);
        $ele.datepicker({
          dateFormat: "mm/dd/yy"
        });
        $ele.next(".date-icon").click(function() {
          $ele.trigger("click").focus();
        });
      }
    };
  }])
  // iterate through all boxes and fix height
  .directive('fixBoxesHeight', [function() {
    return {
      restrict: 'A',
      link: function(scope, element) {
        element.ready(function() {
          var maxHeight = 0,
            $boxes = $(element).find('.boxes');
          $boxes.each(function() {
            maxHeight = Math.max(maxHeight, $(this).height());
          });
          $boxes.height(maxHeight);
        });
      }
    };
  }])
  // display table with project orders
  .directive('ordersTable', [function() {
    return {
      restrict: 'E',
      scope: {
        orders: "="
      },
      templateUrl: '/partials/common/orders-table.html'
    };
  }])
  // display box with service details
  .directive('serviceBox', [function() {
    return {
      restrict: 'E',
      scope: {
        service: "="
      },
      templateUrl: '/partials/common/service-box.html'
    };
  }])
  // show grid or list view
  .directive('switchViewButtons', ["fixSidebar", function(fixSidebar) {
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
          $(scope.gridView).hide();
          $(scope.listView).show();
          $(element).find(".js-list-btn").addClass('btn-active');
          $(element).find(".js-grid-btn").removeClass('btn-active');
          fixSidebar();
        };
        scope.showGrid = function() {
          $(scope.gridView).show();
          $(scope.listView).hide();
          $(element).find(".js-grid-btn").addClass('btn-active');
          $(element).find(".js-list-btn").removeClass('btn-active');
          fixSidebar();
        };
      }
    };
  }])
  // show category (blue print, webservices, applications) in marketplace view
  .directive('marketplaceItems', [function() {
    return {
      restrict: 'E',
      templateUrl: '/partials/common/marketplace-items.html',
      transclude: true,
      scope: {
        items: "="
      },
      link: function(scope) {
        scope.tab = "featured";
      }
    };
  }])
  // show tooltip on mouse over
  .directive('tooltip', [function() {
    return {
      restrict: 'A',
      link: function(scope, element) {
        $(element).tooltip({
          tooltipClass: "icon-arrow",
          position: {
            my: "left-23 top",
            at: "center bottom+24"
          }
        });
      }
    };
  }])
  // popup with X icon for dashboard
  .directive('alertPopup', ["fixSidebar", function(fixSidebar) {
    return {
      restrict: 'E',
      scope: {
        msg: "="
      },
      transclude: true,
      template: '<div class="notification-msg"><span ng-transclude></span><span class="close"><a href="javascript:"></a></span></div>',
      link: function(scope, element) {
        $(element).find('.close').click(function() {
          $(element).remove();
          fixSidebar();
        });
      }
    };
  }])
  // animate graphs
  .directive('animateKnob', ["$interval", function($interval) {
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
          animate();
          scope.$watch("selectedStatistic", function(newValue, oldValue) {
            if (newValue !== oldValue) {
              animate();
            }
          });
        });
      }
    };
  }]);