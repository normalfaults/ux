/*
 * Copyright (C) 2014 TopCoder Inc., All Rights Reserved.
 */

'use strict';

var angular = require('angular');
var _ = require('lodash');

module.exports = angular.module('broker.factories', [])
  .factory('ApiResource', [function() {

    // @todo Move this to it's own JSON file.
    var jsonRoutes = {
      //'basePath': 'http://localhost:5000/api',
      'basePath': '/api',
      'routes': {
        'solutions':         '/solutions/:id',
        'projectValues':     '/projectValues',
        'manageValues':      '/manageValues',
        'marketplaceValues': '/marketplaceValues',
        'alerts':            '/alerts',
        'alertPopup':        '/alertPopup',
        'usersById':         '/users/:id',
        'recentUsers':       '/users/recent',
        'ordersById':        '/orders/:id',
        'recentOrders':      '/orders/recent',
        'projectsById':      '/projects/:id',
        'servicesById':      '/services/:id',
        'applicationsById':  '/applications/:id',
        'bundlesById':       '/bundles/:id',
        'header':            '/header'
      }
    };

    return function(apiResourceKey) {
      if (_.isEmpty(apiResourceKey)) {
        return jsonRoutes.basePath;
      }
      return jsonRoutes.basePath + jsonRoutes.routes[apiResourceKey];
    };
  }])
  // resource for Solution
  .factory('Solution', ['$resource', 'ApiResource', function($resource, ApiResource) {
    return $resource(ApiResource('solutions'));
  }])
  // resource for general data
  .factory('DataService', ['$resource', 'ApiResource', function($resource, ApiResource) {
    return $resource(ApiResource(), {}, {
      getProjectValues: {
        method: "GET",
        url: ApiResource('projectValues')
      },
      getManageValues: {
        method: "GET",
        url: ApiResource('manageValues')
      },
      getMarketplaceValues: {
        method: "GET",
        url: ApiResource('marketplaceValues')
      },
      getAlerts: {
        method: "GET",
        isArray: true,
        url: ApiResource('alerts')
      },
      getAlertPopup: {
        method: "GET",
        url: ApiResource('alertPopup')
      }
    });
  }])
  // resource for User
  .factory('User', ['$resource', 'ApiResource', function($resource, ApiResource) {
    return $resource(ApiResource('usersById'), {}, {
      getRecentUsers: {
        method: "GET",
        isArray: true,
        url: ApiResource('recentUsers')
      }
    });
  }])
  // resource for Order
  .factory('Order', ['$resource', 'ApiResource', function($resource, ApiResource) {
    return $resource(ApiResource('ordersById'), {}, {
      getRecentOrders: {
        method: "GET",
        isArray: true,
        url: ApiResource('recentOrders')
      }
    });
  }])
  // resource for Project
  .factory('Project', ['$resource', 'ApiResource', function($resource, ApiResource) {
    return $resource(ApiResource('projectsById'));
  }])
  // resource for Service
  .factory('Service', ['$resource', 'ApiResource', function($resource, ApiResource) {
    return $resource(ApiResource('servicesById'));
  }])
  // resource for Application
  .factory('Application', ['$resource', 'ApiResource', function($resource, ApiResource) {
    return $resource(ApiResource('applicationsById'));
  }])
  // resource for Bundle
  .factory('Bundle', ['$resource', 'ApiResource', function($resource, ApiResource) {
    return $resource(ApiResource('bundlesById'));
  }])
  // resource for data displayed in header (notifications and basket count)
  .factory('HeaderData', ['$resource', 'ApiResource', function($resource, ApiResource) {
    return $resource(ApiResource('header'));
  }])
  // fix sidebar height
  .factory('fixSidebar', [function() {
    return function() {
      var $nav = $('.side-nav');
      $nav.height(500);

      var headerAndFooterHeight = $('header').outerHeight() + $('footer').outerHeight();
      var mainContentEl = $('.main-content');

      if ((mainContentEl.height() + headerAndFooterHeight) < document.documentElement.clientHeight) {
        $nav.height(document.documentElement.clientHeight - headerAndFooterHeight);
      } else {
        $nav.height(mainContentEl.height());
      }
    };
  }]);