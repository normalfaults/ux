/*
 * Copyright (C) 2014 TopCoder Inc., All Rights Reserved.
 */

'use strict';

var angular = require('angular');

module.exports = angular.module('broker.factories', [])
  // resource for Solution
  .factory('Solution', ['$resource', function($resource) {
    return $resource("/api/solutions/:id");
  }])
  // resource for general data
  .factory('DataService', ['$resource', function($resource) {
    return $resource("/api", {}, {
      getProjectValues: {
        method: "GET",
        url: "/api/projectValues"
      },
      getManageValues: {
        method: "GET",
        url: "/api/manageValues"
      },
      getMarketplaceValues: {
        method: "GET",
        url: "/api/marketplaceValues"
      },
      getAlerts: {
        method: "GET",
        isArray: true,
        url: "/api/alerts"
      },
      getAlertPopup: {
        method: "GET",
        url: "/api/alertPopup"
      }
    });
  }])
  // resource for User
  .factory('User', ['$resource', function($resource) {
    return $resource("/api/users/:id", {}, {
      getRecentUsers: {
        method: "GET",
        isArray: true,
        url: "/api/users/recent"
      }
    });
  }])
  // resource for Order
  .factory('Order', ['$resource', function($resource) {
    return $resource("/api/orders/:id", {}, {
      getRecentOrders: {
        method: "GET",
        isArray: true,
        url: "/api/orders/recent"
      }
    });
  }])
  // fix sidebar height
  .factory('fixSidebar', [function() {  
    return function() {
      var $nav = $('.side-nav');
      $nav.height(500);

      var headerAndFooterHeight = $('header').outerHeight() + $('footer').outerHeight();

      if (($(".main-content").height() + headerAndFooterHeight) < document.documentElement.clientHeight) {
        $nav.height(document.documentElement.clientHeight - headerAndFooterHeight);
      } else {
        $nav.height($(".main-content").height());
      }
    };
  }])
  // resource for Project
  .factory('Project', ['$resource', function($resource) {
    return $resource("/api/projects/:id");
  }])
  // resource for Service
  .factory('Service', ['$resource', function($resource) {
    return $resource("/api/services/:id");
  }])
  // resource for Application
  .factory('Application', ['$resource', function($resource) {
    return $resource("/api/applications/:id");
  }])
  // resource for Bundle
  .factory('Bundle', ['$resource', function($resource) {
    return $resource("/api/bundles/:id");
  }])
  // resource for data displayed in header (notifications and basket count)
  .factory('HeaderData', ['$resource', function($resource) {
    return $resource("/api/header");
  }]);